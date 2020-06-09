declare type PayUrlProps = {
  amount: number;
  reference?: string;
  tax?: number;
  config?: any;
  tip?: boolean;
};

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
}
