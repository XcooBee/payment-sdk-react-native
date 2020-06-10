import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';

export const createQR = (value: string): React.ReactElement => (
  <QRCode
    value={value}
  />
);
