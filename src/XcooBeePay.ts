import * as React from 'react';
import QueryString from 'query-string';
import { Buffer } from 'buffer';

import {
  MAX_DATA_LENGTH,
  MAX_DEVICE_ID_LENGTH,
  MAX_SOURCE_LENGTH,
  MAX_SUB_ITEMS_AMOUNT,
  MAX_SUB_ITEMS_REF_LENGTH,
  QRRenderer,
  SecurePayItemActions,
  SecurePayItemParams,
  SecurePayParams,
  WEB_SITE_URL
} from './Shared';
import {
  SecurePay,
  SecurePayItem,
  SecurePayLogic,
  SecurePayLogicSubSet,
  SecurePaySubItem,
  SecurePaySubItemWithCost,
  XcooBeePayBase,
  XcooBeePayConfig,
  XcooBeePayQR,
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
    }

    if (!config.formId) {
      throw new Error('Form id is not configured. Invoke setConfig() before using functions.');
    }

    return true;
  }

  private makeSecurePayItem(params: {
    amount?: number;
    reference?: string | null;
    tax?: number | null;
    logic?: SecurePayLogic[];
  }): SecurePay {
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
   *
   * @param config
   */
  public setSystemConfig(config: XcooBeePayConfig) {
    this.config = config;
  }

  /**
   *
   */
  public clearSystemConfig() {
    delete this.config;
    this.config = undefined;
  }

  /**
   *
   * @param amount
   * @param reference
   * @param tax
   * @param config
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
   *
   * @param amount
   * @param reference
   * @param tax
   * @param config
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
   *
   * @param amount
   * @param reference
   * @param tax
   * @param config
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
   *
   * @param amount
   * @param arrayOfItems
   * @param reference
   * @param tax
   * @param config
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
   *
   * @param amount
   * @param arrayOfItems
   * @param reference
   * @param tax
   * @param config
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
   *
   * @param amount
   * @param arrayOfItems
   * @param reference
   * @param tax
   * @param config
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
   *
   * @param amount
   * @param arrayOfItems
   * @param reference
   * @param tax
   * @param config
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
   *
   * @param reference
   * @param config
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
   *
   * @param amount
   * @param reference
   * @param tax
   * @param config
   */
  public createPayQR(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createPayUrl(amount, reference, tax, config));
  }

  /**
   *
   * @param amount
   * @param reference
   * @param tax
   * @param config
   */
  public createPayQRWithTip(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createPayUrlWithTip(amount, reference, tax, config));
  }

  /**
   *
   * @param amount
   * @param reference
   * @param tax
   * @param config
   */
  public createSingleItemQR(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleItemUrl(amount, reference, tax, config));
  }

  /**
   *
   * @param amount
   * @param arrayOfItems
   * @param reference
   * @param tax
   * @param config
   */
  public createSingleSelectQR(
    amount: number,
    arrayOfItems: SecurePaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleSelectUrl(amount, arrayOfItems, reference, tax, config));
  }

  /**
   *
   * @param amount
   * @param arrayOfItems
   * @param reference
   * @param tax
   * @param config
   */
  public createSingleSelectWithCostQR(
    amount: number,
    arrayOfItems: SecurePaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleSelectWithCostUrl(amount, arrayOfItems, reference, tax, config));
  }

  /**
   *
   * @param amount
   * @param arrayOfItems
   * @param reference
   * @param tax
   * @param config
   */
  public createMultiSelectQR(
    amount: number,
    arrayOfItems: SecurePaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createMultiSelectUrl(amount, arrayOfItems, reference, tax, config));
  }

  /**
   *
   * @param amount
   * @param arrayOfItems
   * @param reference
   * @param tax
   * @param config
   */
  public createMultiSelectQRWithCost(
    amount: number,
    arrayOfItems: SecurePaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createMultiSelectUrlWithCost(amount, arrayOfItems, reference, tax, config));
  }

  /**
   *
   * @param reference
   * @param config
   */
  public createExternalReferenceQR(
    reference: string,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createExternalReferenceUrl(reference, config));
  }
}
