import { WEB_SITE_URL } from './Shared';

class XcooBeePay {
  private config?: XcooBeePayConfig;

  private checkConfig() {
    const config = this.getConfig();

    if (!config) {
      throw new Error('Instance is not configured, invoke setConfig() before using functions.')
    }

    if (!config.campaignId) {
      throw new Error('Campaign id is not configured. Invoke setConfig() before using functions.')
    }

    if (!config.formId) {
      throw new Error('Form id is not configured. Invoke setConfig() before using functions.')
    }
  }

  public getConfig(): XcooBeePayConfig | undefined {
    return this.config;
  }

  public setConfig(config: XcooBeePayConfig) {
    this.config = config;
  }

  public clearConfig() {
    delete this.config;
    this.config = undefined;
  }

  public createPayUrl(params: PayUrlProps): string {
    this.checkConfig();

    return `${WEB_SITE_URL}/securePay/${this.config!.campaignId}/${this.config!.formId}`;
  }
}

export default new XcooBeePay();
