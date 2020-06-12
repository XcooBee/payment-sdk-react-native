import * as React from 'react';
import { Buffer } from 'buffer';
import QueryString from 'query-string';

import {
  MAX_AMOUNT,
  MAX_DATA_LENGTH,
  MAX_DEVICE_ID_LENGTH,
  MAX_REFERENCE_LENGTH,
  MAX_SOURCE_LENGTH,
  MAX_SUB_ITEMS_AMOUNT,
  MAX_SUB_ITEMS_REF_LENGTH, REGEXP_CAMPAIGN_ID, REGEXP_FORM_ID,
  SecurePayItemActions,
  SecurePayItemParams,
  SecurePayParams,
  WEB_SITE_URL
} from './Shared';
import {
  QRRenderer,
  SecurePay,
  SecurePayItem,
  SecurePayLogic,
  SecurePayLogicSubSet,
  SecurePaySubItem,
  SecurePaySubItemWithCost,
  XcooBeePayBase,
  XcooBeePayConfig,
  XcooBeePayQR,
  XcoobeePayQRConfig,
  XcooBeePayUrl
} from './types';

export class XcooBeePaySDK implements XcooBeePayBase, XcooBeePayUrl, XcooBeePayQR<React.ReactElement> {
  private readonly renderQR: QRRenderer;
  private config?: XcooBeePayConfig;

  constructor(qrRenderer?: QRRenderer) {
    this.renderQR = qrRenderer || (() => null);
  }

  private checkConfig(config?: XcooBeePayConfig) {
    if (!config) {
      throw new Error('Instance is not configured, invoke setConfig() before using functions.');
    }

    if (!config.campaignId) {
      throw new Error('Campaign id is not configured. Invoke setConfig() before using functions.');
    } else if (!config.campaignId.match(REGEXP_CAMPAIGN_ID)) {
      console.warn('Campaign id has incorrect format.');
    }

    if (!config.formId) {
      throw new Error('Form id is not configured. Invoke setConfig() before using functions.');
    } else if (!config.campaignId.match(REGEXP_FORM_ID)) {
      console.warn('Form id has incorrect format.');
    }

    return true;
  }

  private makeSecurePayItem(params: {
    amount?: number;
    reference?: string | null;
    tax?: number | null;
    logic?: SecurePayLogic[];
  }): SecurePay {
    if ((params.amount || 0) > MAX_AMOUNT) {
      throw new Error(`Amount parameter should be less than ${MAX_AMOUNT}`);
    }

    if ((params.reference || '').length > MAX_REFERENCE_LENGTH) {
      throw new Error(`Reference parameter should be less than ${MAX_REFERENCE_LENGTH}`);
    }

    return Object.entries({
      [SecurePayItemParams.Amount]: params.amount,
      [SecurePayItemParams.Reference]: params.reference,
      [SecurePayItemParams.Tax]: params.tax,
      [SecurePayItemParams.Logic]: params.logic
    }).reduce((acc, item) => {
      if (item[1] !== undefined && item[1] !== null) {
        return {
          ...acc,
          [item[0]]: item[1]
        };
      }

      return acc;
    }, {});
  }

  private makeSecurePayItemTotal(params: SecurePayItem): SecurePay[] {
    const payload = this.makeSecurePayItem({
      amount: params.amount,
      reference: params.reference,
      tax: params.tax,
      logic: [{ a: SecurePayItemActions.setTotal }]
    });

    return params.tip ? [
      payload,
      this.makeSecurePayItem({
        reference: 'Tip',
        logic: [{ a: SecurePayItemActions.setTip }]
      })
    ] : [
      payload
    ];
  }

  private makePayUrl(securePay: SecurePay[], forcedConfig?: XcooBeePayConfig): string {
    const config = forcedConfig || this.config;
    this.checkConfig(config);

    const dataBase64 = Buffer.from(JSON.stringify(securePay))
      .toString('base64');

    const externalDeviceId = (config!.deviceId || '').substring(0, MAX_DEVICE_ID_LENGTH);
    const xcoobeeDeviceId = (config!.XcooBeeDeviceId || '').substring(0, MAX_DEVICE_ID_LENGTH);
    const source = (config!.source || '').substring(0, MAX_SOURCE_LENGTH);

    const deviceId = !!config!.XcooBeeDeviceId ? {
      [SecurePayParams.XcooBeeDeviceId]: xcoobeeDeviceId || undefined
    } : {
      [SecurePayParams.ExternalDeviceId]: externalDeviceId || undefined
    };

    if (dataBase64.length > MAX_DATA_LENGTH) {
      console.warn('Data parameter encoded to Base64 is bigger than', MAX_DATA_LENGTH);
    }

    if ((deviceId[SecurePayParams.XcooBeeDeviceId] || '').length > MAX_DEVICE_ID_LENGTH) {
      console.warn('XcooBeeDeviceId parameter is bigger than', MAX_DEVICE_ID_LENGTH);
    }

    if ((deviceId[SecurePayParams.ExternalDeviceId] || '').length > MAX_DEVICE_ID_LENGTH) {
      console.warn('ExternalDeviceId parameter is bigger than', MAX_DEVICE_ID_LENGTH);
    }

    if ((source || '').length > MAX_SOURCE_LENGTH) {
      console.warn('Source parameter is bigger than', MAX_DEVICE_ID_LENGTH);
    }

    return QueryString.stringifyUrl({
      url: `${WEB_SITE_URL}/securePay/${config!.campaignId}/${config!.formId}`,
      query: {
        [SecurePayParams.Data]: dataBase64.substring(0, MAX_DATA_LENGTH),
        [SecurePayParams.Source]: source || undefined,
        ...deviceId,
      }
    });
  }

  private mapSubItems(items: SecurePaySubItem[]): string[] {
    return items.filter((v, i) => i < MAX_SUB_ITEMS_AMOUNT)
      .map((item) => item.reference.substring(0, MAX_SUB_ITEMS_REF_LENGTH));
  }

  private mapSubItemsWithCost(items: SecurePaySubItemWithCost[]): SecurePayLogicSubSet[] {
    return items.filter((v, i) => i < MAX_SUB_ITEMS_AMOUNT)
      .map((item) => [
        item.reference.substring(0, MAX_SUB_ITEMS_REF_LENGTH),
        item.amount
      ]);
  }

  /**
   * The configuration function sets reuseable configuration for session. As an alternative you can provide a
   * configuration object to each of your individual calls.
   * @param config the global configuration object
   */
  public setSystemConfig(config: XcooBeePayConfig) {
    this.config = config;
  }

  /**
   * Removes the existing global configuration from session.
   */
  public clearSystemConfig() {
    delete this.config;
    this.config = undefined;
  }

  /**
   * Returns URL that can activate a single total payment. Existing items will be deleted. Only this item can be
   * processed. If you use zero amount, the user can enter the amount for payment.
   * @param amount total payment amount
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   */
  public createPayUrl(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePay = this.makeSecurePayItemTotal({
      amount,
      reference,
      tax
    });

    return this.makePayUrl(securePay, config);
  }

  /**
   * Returns a URL that can activate a total payment and predefined Tip calculator. This allows an additional Tip to be
   * added to the total at checkout. Existing items in cart will be removed when this item is activated.
   * @param amount the item main item amount to be charged. The tip will be calculated as percentage of this.
   * @param reference the item description or reference for payment the description of the item
   * @param tax the included tax of the item the included tax.
   * @param config the method specific configuration object override
   */
  public createPayUrlWithTip(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePay = this.makeSecurePayItemTotal({
      amount,
      reference,
      tax,
      tip: true
    });

    return this.makePayUrl(securePay, config);
  }

  /**
   * Return URL that adds new item to eCommerce basket.
   * @param amount the item price of the item
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item the included tax of the item
   * @param config the method specific configuration object override
   */
  public createSingleItemUrl(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: SecurePayItemActions.userEntry
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  /**
   * Return URL to add a single item to cart. The item has multiple options of which one can be selected.
   * @param amount the cost of the item
   * @param arrayOfItems the array of option items
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   */
  public createSingleSelectUrl(
    amount: number,
    arrayOfItems: SecurePaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: SecurePayItemActions.addSubRadio,
        r: this.mapSubItems(arrayOfItems)
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  /**
   * Return URL to add a single item to cart. The item has multiple options of which one can be selected. Each option
   * can also add cost to item total.
   * @param amount the amount of item without any options selected
   * @param arrayOfItems the array of option items and cost
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   */
  public createSingleSelectWithCostUrl(
    amount: number,
    arrayOfItems: SecurePaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: SecurePayItemActions.addSubRadioWithExtraCost,
        r: this.mapSubItemsWithCost(arrayOfItems)
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  /**
   * Return URL to add a single item to cart. The item has multiple options of which any can be selected.
   * @param amount the cost of main item
   * @param arrayOfItems the array of option items
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   */
  public createMultiSelectUrl(
    amount: number,
    arrayOfItems: SecurePaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: SecurePayItemActions.addSubCheckbox,
        r: this.mapSubItems(arrayOfItems)
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  /**
   * Return URL to add a single item to cart. The item has multiple options of which any can be selected. Each option
   * can also add cost to item total.
   * @param amount the item total without any options selected
   * @param arrayOfItems the array of option items and cost
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   */
  public createMultiSelectUrlWithCost(
    amount: number,
    arrayOfItems: SecurePaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: SecurePayItemActions.addSubCheckboxWithExtraCost,
        r: this.mapSubItemsWithCost(arrayOfItems)
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  /**
   * Create URL that uses external (XcooBee Hosted) definition for cost, image, and option logic. Obtain references from
   * XcooBee.
   * @param reference the external item reference. You will need to coordinate this with your XcooBee team
   * @param config the method specific configuration object override
   *
   */
  public createExternalReferenceUrl(
    reference: string,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      logic: [{
        a: SecurePayItemActions.externalPricing,
        r: reference
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  /**
   * Returns QR that can activate a single total payment. Existing items will be deleted. Only this item can be
   * processed. If you use zero amount, the user can enter the amount for payment.
   * @param amount the total to be paid
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   * @param qrConfig
   */
  public createPayQR(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig,
    qrConfig?: XcoobeePayQRConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createPayUrl(amount, reference, tax, config));
  }

  /**
   * Returns a QR that can activate a total payment and predefined Tip calculator. This allows an additional Tip to be
   * added to the total at checkout. Existing items in cart will be removed when this item is activated.
   * @param amount the item main item amount to be charged. The tip will be calculated as percentage of this.
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   * @param qrConfig
   */
  public createPayQRWithTip(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig,
    qrConfig?: XcoobeePayQRConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createPayUrlWithTip(amount, reference, tax, config));
  }

  /**
   * Return QR that adds new item to eCommerce basket.
   * @param amount
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   * @param qrConfig
   */
  public createSingleItemQR(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig,
    qrConfig?: XcoobeePayQRConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleItemUrl(amount, reference, tax, config));
  }

  /**
   * Return QR to add a single item to cart. The item has multiple options of which one can be selected.
   * @param amount
   * @param arrayOfItems
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   * @param qrConfig
   */
  public createSingleSelectQR(
    amount: number,
    arrayOfItems: SecurePaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig,
    qrConfig?: XcoobeePayQRConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleSelectUrl(amount, arrayOfItems, reference, tax, config));
  }

  /**
   * Return QR to add a single item to cart. The item has multiple options of which one can be selected. Each option can
   * also add cost to item total.
   * @param amount
   * @param arrayOfItems
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   * @param qrConfig
   */
  public createSingleSelectWithCostQR(
    amount: number,
    arrayOfItems: SecurePaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig,
    qrConfig?: XcoobeePayQRConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleSelectWithCostUrl(amount, arrayOfItems, reference, tax, config));
  }

  /**
   * Return QR to add a single item to cart. The item has multiple options of which any can be selected.
   * @param amount
   * @param arrayOfItems
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   * @param qrConfig
   */
  public createMultiSelectQR(
    amount: number,
    arrayOfItems: SecurePaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig,
    qrConfig?: XcoobeePayQRConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createMultiSelectUrl(amount, arrayOfItems, reference, tax, config));
  }

  /**
   * Return QR to add a single item to cart. The item has multiple options of which any can be selected. Each option can
   * also add cost to item total.
   * @param amount
   * @param arrayOfItems
   * @param reference the item description or reference for payment
   * @param tax the included tax of the item
   * @param config the method specific configuration object override
   * @param qrConfig
   */
  public createMultiSelectQRWithCost(
    amount: number,
    arrayOfItems: SecurePaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig,
    qrConfig?: XcoobeePayQRConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createMultiSelectUrlWithCost(amount, arrayOfItems, reference, tax, config));
  }

  /**
   * Create URL that uses external (XcooBee Hosted) definition for cost, image, and option logic. Obtain references from
   * XcooBee.
   * @param reference the item description or reference for payment
   * @param config the method specific configuration object override
   * @param qrConfig
   */
  public createExternalReferenceQR(
    reference: string,
    config?: XcooBeePayConfig,
    qrConfig?: XcoobeePayQRConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createExternalReferenceUrl(reference, config));
  }
}
