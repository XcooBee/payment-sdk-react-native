import * as React from 'react';
import QueryString from 'query-string';

import {
  MAX_DATA_LENGTH,
  MAX_DEVICE_ID_LENGTH,
  MAX_SOURCE_LENGTH,
  MAX_SUB_ITEMS_AMOUNT,
  MAX_SUB_ITEMS_REF_LENGTH,
  QRRenderer,
  QuickPayActions,
  QuickPayParams,
  SecurePayParams,
  WEB_SITE_URL
} from './Shared';

export class XcooBeePaySDK implements XcooBeePayBase, XcooBeePayUrl, XcooBeePayQR<React.ReactElement> {
  private config?: XcooBeePayConfig;
  private renderQR: QRRenderer;

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
      [SecurePayParams.Amount]: params.amount,
      [SecurePayParams.Reference]: params.reference,
      [SecurePayParams.Tax]: params.tax,
      [SecurePayParams.Logic]: params.logic
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

  private makeSecurePayItemTotal(params: Omit<PayUrlProps, 'config'>): SecurePay[] {
    const payload = this.makeSecurePayItem({
      amount: params.amount,
      reference: params.reference,
      tax: params.tax,
      logic: [{ a: QuickPayActions.setTotal }]
    });

    return params.tip ? [
      payload,
      this.makeSecurePayItem({
        reference: 'Tip',
        logic: [{ a: QuickPayActions.setTip }]
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
      [QuickPayParams.XcooBeeDeviceId]: xcoobeeDeviceId || undefined
    } : {
      [QuickPayParams.ExternalDeviceId]: externalDeviceId || undefined
    };

    if (dataBase64.length > MAX_DATA_LENGTH) {
      console.warn('Data parameter encoded to Base64 is bigger than', MAX_DATA_LENGTH);
    }

    if ((deviceId[QuickPayParams.XcooBeeDeviceId] || '').length > MAX_DEVICE_ID_LENGTH) {
      console.warn('XcooBeeDeviceId parameter is bigger than', MAX_DEVICE_ID_LENGTH);
    }

    if ((deviceId[QuickPayParams.ExternalDeviceId] || '').length > MAX_DEVICE_ID_LENGTH) {
      console.warn('ExternalDeviceId parameter is bigger than', MAX_DEVICE_ID_LENGTH);
    }

    if ((source || '').length > MAX_SOURCE_LENGTH) {
      console.warn('Source parameter is bigger than', MAX_DEVICE_ID_LENGTH);
    }

    return QueryString.stringifyUrl({
      url: `${WEB_SITE_URL}/securePay/${config!.campaignId}/${config!.formId}`,
      query: {
        [QuickPayParams.Data]: dataBase64.substring(0, MAX_DATA_LENGTH),
        [QuickPayParams.Source]: source || undefined,
        ...deviceId,
      }
    });
  }

  private mapSubItems(items: QuickPaySubItem[]): string[] {
    return items.filter((v, i) => i < MAX_SUB_ITEMS_AMOUNT)
      .map((item) => item.reference.substring(0, MAX_SUB_ITEMS_REF_LENGTH));
  }

  private mapSubItemsWithCost(items: QuickPaySubItemWithCost[]): SecurePayLogicSubSet[] {
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
        a: QuickPayActions.userEntry
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  public createSingleSelectUrl(
    amount: number,
    arrayOfItems: QuickPaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: QuickPayActions.addSubRadio,
        r: this.mapSubItems(arrayOfItems)
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  public createSingleSelectWithCostUrl(
    amount: number,
    arrayOfItems: QuickPaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: QuickPayActions.addSubRadioWithExtraCost,
        r: this.mapSubItemsWithCost(arrayOfItems)
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  public createMultiSelectUrl(
    amount: number,
    arrayOfItems: QuickPaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: QuickPayActions.addSubCheckbox,
        r: this.mapSubItems(arrayOfItems)
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  public createMultiSelectUrlWithCost(
    amount: number,
    arrayOfItems: QuickPaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      amount,
      reference,
      tax,
      logic: [{
        a: QuickPayActions.addSubCheckboxWithExtraCost,
        r: this.mapSubItemsWithCost(arrayOfItems)
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  public createExternalReferenceUrl(
    reference: string,
    config?: XcooBeePayConfig
  ): string {
    const securePayItem = this.makeSecurePayItem({
      logic: [{
        a: QuickPayActions.externalPricing,
        r: reference
      }]
    });

    return this.makePayUrl([securePayItem], config);
  }

  public createPayQR(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createPayUrl(amount, reference, tax, config));
  }

  public createPayQRWithTip(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createPayUrlWithTip(amount, reference, tax, config));
  }

  public createSingleItemQR(
    amount: number,
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleItemUrl(amount, reference, tax, config));
  }

  public createSingleSelectQR(
    amount: number,
    arrayOfItems: QuickPaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleSelectUrl(amount, arrayOfItems, reference, tax, config));
  }

  public createSingleSelectWithCostQR(
    amount: number,
    arrayOfItems: QuickPaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createSingleSelectWithCostUrl(amount, arrayOfItems, reference, tax, config));
  }

  public createMultiSelectQR(
    amount: number,
    arrayOfItems: QuickPaySubItem[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createMultiSelectUrl(amount, arrayOfItems, reference, tax, config));
  }

  public createMultiSelectQRWithCost(
    amount: number,
    arrayOfItems: QuickPaySubItemWithCost[],
    reference?: string | null,
    tax?: number | null,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createMultiSelectUrlWithCost(amount, arrayOfItems, reference, tax, config));
  }

  public createExternalReferenceQR(
    reference: string,
    config?: XcooBeePayConfig
  ): React.ReactElement | null {
    return this.renderQR(this.createExternalReferenceUrl(reference, config));
  }
}
