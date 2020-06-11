import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';

/**
 *
 * @param value
 * @param size
 * @constructor
 */
export const XcooBeePayQR = (value: string, size: number = 150): React.ReactElement => (
  <QRCode
    value={value}
    size={size}
  />
);
