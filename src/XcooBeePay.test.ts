import QueryString from 'query-string';

import XcooBeePay, { QuickPayActions, SecurePayParams, WEB_SITE_URL } from './';

const campaignId = 'f98.eg6152508';
const formId = 'v025';

beforeEach(() => {
  XcooBeePay.setSystemConfig({
    campaignId: 'f98.eg6152508',
    formId: 'v025'
  });
});

afterEach(() => {
  XcooBeePay.clearSystemConfig();
});

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
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString());

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

describe('Testing createSingleItemUrl()', () => {
  it('Test with amount', () => {
    const payUrl = XcooBeePay.createSingleItemUrl(12.34);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Logic]: [{ a: QuickPayActions.userEntry }]
      }]);
  });
});

describe('Testing createSingleSelectUrl()', () => {
  it('Test with amount and five sub items', () => {
    const subItems: QuickPaySubItem[] = [
      { reference: 'One' },
      { reference: 'Two' },
      { reference: 'Three' },
      { reference: 'Four' },
      { reference: 'Five' },
    ];

    const payUrl = XcooBeePay.createSingleSelectUrl(12.34, subItems);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Logic]: [{
          a: QuickPayActions.addSubRadio,
          r: ['One', 'Two', 'Three', 'Four', 'Five']
        }]
      }]);
  });
});

describe('Testing createSingleSelectWithCostUrl()', () => {
  it('Test with amount and five sub items with price', () => {
    const subItems: QuickPaySubItemWithCost[] = [
      { reference: 'One', amount: 5 },
      { reference: 'Two', amount: 4 },
      { reference: 'Three', amount: 3 },
      { reference: 'Four', amount: 2 },
      { reference: 'Five', amount: 1 },
    ];

    const payUrl = XcooBeePay.createSingleSelectWithCostUrl(12.34, subItems);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Logic]: [{
          a: QuickPayActions.addSubRadioWithExtraCost,
          r: [
            ['One', 5],
            ['Two', 4],
            ['Three', 3],
            ['Four', 2],
            ['Five', 1]
          ]
        }]
      }]);
  });
});

describe('Testing createMultiSelectUrl()', () => {
  it('Test with amount and five sub items', () => {
    const subItems: QuickPaySubItem[] = [
      { reference: 'One' },
      { reference: 'Two' },
      { reference: 'Three' },
      { reference: 'Four' },
      { reference: 'Five' },
    ];

    const payUrl = XcooBeePay.createMultiSelectUrl(12.34, subItems);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Logic]: [{
          a: QuickPayActions.addSubCheckbox,
          r: ['One', 'Two', 'Three', 'Four', 'Five']
        }]
      }]);
  });
});

describe('Testing createMultiSelectUrlWithCost()', () => {
  it('Test with amount and five sub items with price', () => {
    const subItems: QuickPaySubItemWithCost[] = [
      { reference: 'One', amount: 5 },
      { reference: 'Two', amount: 4 },
      { reference: 'Three', amount: 3 },
      { reference: 'Four', amount: 2 },
      { reference: 'Five', amount: 1 },
    ];

    const payUrl = XcooBeePay.createMultiSelectUrlWithCost(12.34, subItems);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Amount]: 12.34,
        [SecurePayParams.Logic]: [{
          a: QuickPayActions.addSubCheckboxWithExtraCost,
          r: [
            ['One', 5],
            ['Two', 4],
            ['Three', 3],
            ['Four', 2],
            ['Five', 1]
          ]
        }]
      }]);
  });
});

describe('Testing createExternalReferenceUrl()', () => {
  it('Test with external price', () => {
    const externalReference = 'shoe';

    const payUrl = XcooBeePay.createExternalReferenceUrl(externalReference);

    const dataJson = QueryString.parseUrl(payUrl).query['d'] as string;
    const data = JSON.parse(Buffer.from(dataJson, 'base64').toString()) as SecurePay;

    expect(data)
      .toEqual([{
        [SecurePayParams.Logic]: [{
          a: QuickPayActions.externalPricing,
          r: externalReference
        }]
      }]);
  });
});
