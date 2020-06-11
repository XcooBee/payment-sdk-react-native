import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';

import { QRRenderer } from './types';

/**
 * Creates QRCode component with firm logo.
 *
 * @param value - Value that will be encoded to QRCode.
 * @param qrConfig - QR Code config.
 */
export const XcooBeePayQR: QRRenderer = (value, qrConfig = {}): React.ReactElement => (
  <QRCode
    value={value}
    size={qrConfig.size ?? 150}
    logo={require('./assets/xcoobee-logo.png')}
  />
);
