import React from 'react';

export interface XcooBeePayBase {
  setSystemConfig(config: XcooBeePayConfig): void;

  clearSystemConfig(): void;
}

export interface XcooBeePayUrl {
  /* tslint:disable:max-line-length */
  createPayUrl(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createPayUrlWithTip(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createSingleItemUrl(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createSingleSelectUrl(amount: number, arrayOfItems: SecurePaySubItem[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createSingleSelectWithCostUrl(amount: number, arrayOfItems: SecurePaySubItemWithCost[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createMultiSelectUrl(amount: number, arrayOfItems: SecurePaySubItem[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createMultiSelectUrlWithCost(amount: number, arrayOfItems: SecurePaySubItemWithCost[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig): string;

  createExternalReferenceUrl(reference: string, config?: XcooBeePayConfig): string;

  /* tslint:enable:max-line-length */
}

export interface XcooBeePayQR<T> {
  /* tslint:disable:max-line-length */
  createPayQR(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig, qrConfig?: XcoobeePayQRConfig): T | null;

  createPayQRWithTip(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig, qrConfig?: XcoobeePayQRConfig): T | null;

  createSingleItemQR(amount: number, reference?: string | null, tax?: number | null, config?: XcooBeePayConfig, qrConfig?: XcoobeePayQRConfig): T | null;

  createSingleSelectQR(amount: number, arrayOfItems: SecurePaySubItem[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig, qrConfig?: XcoobeePayQRConfig): T | null;

  createSingleSelectWithCostQR(amount: number, arrayOfItems: SecurePaySubItemWithCost[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig, qrConfig?: XcoobeePayQRConfig): T | null;

  createMultiSelectQR(amount: number, arrayOfItems: SecurePaySubItem[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig, qrConfig?: XcoobeePayQRConfig): T | null;

  createMultiSelectQRWithCost(amount: number, arrayOfItems: SecurePaySubItemWithCost[], reference?: string | null, tax?: number | null, config?: XcooBeePayConfig, qrConfig?: XcoobeePayQRConfig): T | null;

  createExternalReferenceQR(reference: string, config?: XcooBeePayConfig, qrConfig?: XcoobeePayQRConfig): T | null;

  /* tslint:enable:max-line-length */
}

/**
 *
 */
export type XcooBeePayConfig = {
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

export type XcoobeePayQRConfig = {
  size?: number;
};

/**
 *
 */
export type SecurePayItem = {
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
   * Include tip.
   */
  tip?: boolean;
};

/**
 * Function that creates QR Code component based on parameters.
 */
export type QRRenderer = (value: string, qrConfig?: XcoobeePayQRConfig) => React.ReactElement | null;

/**
 * Secure Pay logic sub-set.
 */
export type SecurePayLogicSubSet = {
  [0]: string;
  [1]: number;
};

/**
 * Secure Pay logic item.
 */
export type SecurePayLogic = {
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
  r: string;
} | {
  a: 9; // userEntry
} | {
  a: 10; // setTotal
};

/**
 * Secure Pay item.
 */
export type SecurePay = {
  /**
   * Amount.
   */
  '0-3'?: number;
  /**
   * Tax.
   */
  '0-5'?: number;
  /**
   * Reference.
   */
  '0-6'?: string;
  /**
   * Logic array.
   */
  l?: SecurePayLogic[];
};

/**
 * Quick pay sub item.
 */
export type SecurePaySubItem = {
  /**
   * Item description.
   */
  reference: string;
};

/**
 * Quick pay sub item with cost.
 */
export type SecurePaySubItemWithCost = Required<SecurePaySubItem> & {
  /**
   * Item cost.
   */
  amount: number;
};
