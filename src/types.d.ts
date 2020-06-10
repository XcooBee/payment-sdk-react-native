declare interface XcooBeePayBase {
  setSystemConfig(config: XcooBeePayConfig): void;

  clearSystemConfig(): void;
}

declare interface XcooBeePayUrl {
  /* tslint:disable:max-line-length */
  createPayUrl(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createPayUrlWithTip(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createSingleItemUrl(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createSingleSelectUrl(amount: number, arrayOfItems: string[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createSingleSelectWithCostUrl(amount: number, arrayOfItems: QuickPaySubItem[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createMultiSelectUrl(amount: number, arrayOfItems: string[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createMultiSelectUrlWithCost(amount: number, arrayOfItems: QuickPaySubItem[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createExternalReferenceUrl(reference: string, config?: XcooBeePayConfig): string;

  /* tslint:enable:max-line-length */
}

declare interface XcooBeePayQR<T> {
  /* tslint:disable:max-line-length */
  createPayQR(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): T;

  createPayQRWithTip(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): T;

  createSingleItemQR(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): T;

  createSingleSelectQR(amount: number, arrayOfItems: string[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): T;

  createSingleSelectWithCostQR(amount: number, arrayOfItems: QuickPaySubItem[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): T;

  createMultiSelectQR(amount: number, arrayOfItems: string[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): T;

  createMultiSelectQRWithCost(amount: number, arrayOfItems: QuickPaySubItem[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): T;

  createExternalReferenceQR(reference: string, config?: XcooBeePayConfig): T;

  /* tslint:enable:max-line-length */
}

declare type XcooBeePayConfig = {
  /**
   * XcooBee campaign id.
   */
  campaignId: string;
  /**
   * Form id for the campaign.
   */
  formId: string;
  /**
   * External device id.
   */
  deviceId?: string;
  /**
   * Source tracking reference for order.
   */
  source?: string;
  /**
   * XcooBee device id. (Only available if your device is connected to XcooBee network).
   * If this is provided the “DeviceId” should not be provided. They are mutually exclusive and only
   * XcooBeeDeviceId will be used.
   */
  XcooBeeDeviceId?: string;
};

declare type PayUrlProps = {
  /**
   * Number to pay for order.
   */
  amount: number;
  /**
   * Description of order.
   */
  reference?: string | null;
  /**
   * Included tax.
   */
  tax?: number | null;
  /**
   * Forced config.
   */
  config?: XcooBeePayConfig;
  /**
   * Include tip.
   */
  tip?: boolean;
};

type SecurePayLogicSubSet = {
  [0]: string;
  [1]: number;
};

declare type SecurePayLogic = {
  a: 1; // addMinOrFixed
  m: number;
  o: number;
  r: string;
} | {
  a: 2; // addMaxOrFixed
  M: number;
  o: number;
  r: string;
} | {
  a: 3; // addSubRadio
  r: string[];
} | {
  a: 4; // addSubRadioWithExtraCost
  r: SecurePayLogicSubSet[];
} | {
  a: 5; // addSubCheckbox
  r: string[];
} | {
  a: 6; // addSubCheckboxWithExtraCost
  r: SecurePayLogicSubSet[];
} | {
  a: 7; // setTip
} | {
  a: 8; // externalPricing
  r: SecurePayExternalPricing;
} | {
  a: 9; // userEntry
} | {
  a: 10; // setTotal
};

declare type SecurePay = {
  readonly '0-3'?: number;
  readonly '0-5'?: number;
  readonly '0-6'?: string;
  // readonly l?: SecurePayLogic[];
  readonly 'l'?: SecurePayLogic[];
};

declare type QuickPaySubItem = {
  amount: number;
  reference: string;
};
