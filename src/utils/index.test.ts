import { WEB_SITE_URL } from './Shared';
import XcooBeePay from './XcooBeePay';

const campaignId = 'f98.eg6152508';
const formId = 'v025';

describe('Utils test', () => {
  beforeEach(() => {
    XcooBeePay.setConfig({
      campaignId: 'f98.eg6152508',
      formId: 'v025'
    });
  });

  afterEach(() => {
    XcooBeePay.clearConfig();
  });

  it('Create Pay Url test', () => {
    const payUrl = XcooBeePay.createPayUrl({
      amount: 12.34
    });

    expect(payUrl)
      .toEqual(`${WEB_SITE_URL}/securePay/${campaignId}/${formId}`);
  });
});
