import React from 'react';

export const WEB_SITE_URL = 'https://app.xcoobee.net';

export enum QuickPayActions {
  addMinOrFixed = 1,
  addMaxOrFixed = 2,
  addSubRadio = 3,
  addSubRadioWithExtraCost = 4,
  addSubCheckbox = 5,
  addSubCheckboxWithExtraCost = 6,
  setTip = 7,
  externalPricing = 8,
  userEntry = 9,
  setTotal = 10,
}

export enum SecurePayParams {
  Amount = '0-3',
  Tax = '0-5',
  Reference = '0-6',
  Logic = 'l'
}

export enum QuickPayParams {
  Data = 'd',
  Source = 's',
  XcooBeeDeviceId = 'did',
  ExternalDeviceId = 'ed',
}

export const MAX_DEVICE_ID_LENGTH = 200;
export const MAX_SOURCE_LENGTH = 10;
export const MAX_DATA_LENGTH = 1800;
export const MAX_SUB_ITEMS_AMOUNT = 25;
export const MAX_SUB_ITEMS_REF_LENGTH = 40;

export type QRRenderer = (value: string, props?: any) => React.ReactElement | null;
