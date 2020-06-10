import QueryString from 'query-string';

import { QuickPayActions, SecurePayParams, WEB_SITE_URL } from './Shared';
import XcooBeePay from './XcooBeePay';

const campaignId = 'f98.eg6152508';
const formId = 'v025';

describe('Testing createPayUrl()', () => {
  beforeEach(() => {
    XcooBeePay.setSystemConfig({
      campaignId: 'f98.eg6152508',
      formId: 'v025'
    });
  });

  afterEach(() => {
    XcooBeePay.clearSystemConfig();
  });

  it('Test Campaign ID and Form ID contains in URL', () => {
    const payUrl = XcooBeePay.createPayUrl(12.34);

    expect(payUrl)
      .toContain(`${WEB_SITE_URL}/securePay/${campaignId}/${formId}`);
  });

  it('Test createPayUrl with \"amount\".', () => {
    const payUrl = XcooBeePay.createPayUrl(12.34);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Logic]: [{ a: 10 }]
      }]);
  });

  it('Test query parameter \"amount and reference\".', () => {
    const payUrl = XcooBeePay.createPayUrl(12.34, 'Green Apple');

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Reference]: 'Green Apple',
        [SecurePayParams.Logic]: [{ a: 10 }]
      }]);
  });

  it('Test query parameter \"amount, reference and tax\".', () => {
    const payUrl = XcooBeePay.createPayUrl(12.34, 'Green Apple', 1.234);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Tax]: 1.234,
        [SecurePayParams.Reference]: 'Green Apple',
        [SecurePayParams.Logic]: [{ a: 10 }]
      }]);
  });

  it('Test query parameter \"amount, tax\" with config external device ID.', () => {
    const payUrl = XcooBeePay.createPayUrl(12.34, null, .0, {
      campaignId,
      formId,
      deviceId: '15f74290-ab31-45c3-b850-511331a9167c'
    });

    const { query } = QueryString.parseUrl(payUrl);
    const externalDeviceId = query['ed'] as string;

    expect(externalDeviceId)
      .toEqual('15f74290-ab31-45c3-b850-511331a9167c');
  });

  it('Test query parameter \"amount, tax\" with config xcoobee device ID.', () => {
    const payUrl = XcooBeePay.createPayUrl(12.34, null, .0, {
      campaignId,
      formId,
      XcooBeeDeviceId: '6a74593b-e899-4543-ad14-7342dedac728'
    });

    const { query } = QueryString.parseUrl(payUrl);
    const xcoobeeDeviceId = query['did'] as string;

    expect(xcoobeeDeviceId)
      .toEqual('6a74593b-e899-4543-ad14-7342dedac728');
  });

  it('Test query parameter \"amount, tax\" with config xcoobee device ID.', () => {
    const payUrl = XcooBeePay.createPayUrl(12.34, null, .0, {
      campaignId,
      formId,
      deviceId: 'e7924cd5-e3ad-405d-9b1b-92479486ddc8',
      XcooBeeDeviceId: 'eff49944-33cb-41ba-a8e9-90ffc86e316c'
    });

    const { query } = QueryString.parseUrl(payUrl);
    const externalDeviceId = query['ed'] as string;
    const xcoobeeDeviceId = query['did'] as string;

    expect(externalDeviceId)
      .toBeUndefined();

    expect(xcoobeeDeviceId)
      .toEqual('eff49944-33cb-41ba-a8e9-90ffc86e316c');
  });

  it('Test createPayUrl to change campaign id and form id with config.', () => {
    const payUrl = XcooBeePay.createPayUrl(.0, null, null, {
      campaignId: 'a00.aa0000000',
      formId: 'a000'
    });

    expect(payUrl.includes('a00.aa0000000'))
      .toBeTruthy();

    expect(payUrl.includes('a000'))
      .toBeTruthy();
  });
});

describe('Test createPayUrlWithTip', () => {
  beforeEach(() => {
    XcooBeePay.setSystemConfig({
      campaignId: 'f98.eg6152508',
      formId: 'v025'
    });
  });

  afterEach(() => {
    XcooBeePay.clearSystemConfig();
  });

  it('Test query parameter \"amount\" with Tip.', () => {
    const payUrl = XcooBeePay.createPayUrlWithTip(12.34);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Logic]: [{ a: QuickPayActions.setTotal }]
      }, {
        [SecurePayParams.Reference]: 'Tip',
        [SecurePayParams.Logic]: [{ a: QuickPayActions.setTip }]
      }]);
  });

  it('Test query parameter \"amount, reference and tax\" with Tip.', () => {
    const payUrl = XcooBeePay.createPayUrlWithTip(12.34, 'Green Apple', 1.23);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Tax]: 1.23,
        [SecurePayParams.Reference]: 'Green Apple',
        [SecurePayParams.Logic]: [{ a: QuickPayActions.setTotal }]
      }, {
        [SecurePayParams.Reference]: 'Tip',
        [SecurePayParams.Logic]: [{ a: QuickPayActions.setTip }]
      }]);
  });
});
