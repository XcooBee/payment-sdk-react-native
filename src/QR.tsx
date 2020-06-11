import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';

type Props = React.ComponentProps<typeof QRCode>;

export const XcooBeePayQR: React.FC<Props> = ({
  value,
  size = 150,
  ...componentProps
}): React.ReactElement => (
  <QRCode
    value={value}
    size={size}
    {...componentProps}
  />
);
