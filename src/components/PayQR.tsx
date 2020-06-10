import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';

export type Props = Omit<React.ComponentProps<typeof QRCode>, 'value'> & {
  amount: number;
};

export const PayQR: React.FC<Props> = ({
  amount,
  ...componentProps
}) => {
  return (
    <QRCode
      value=""
      {...componentProps}
    />
  );
};
