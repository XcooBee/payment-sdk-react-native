# XcooBee Payment SDK for React Native

### Installation
You'll need to install react-native-svg library first.

#### Install react-native-svg
with NPM:

`npm install react-native-svg`

with Yarn:

`yarn add react-native-svg`

#### Link react-native-svg

with React Native:

`react-native link react-native-svg`

with Expo:

`expo install react-native-svg`

#### Install react-native-xcoobee-payment-sdk

with NPM: 

`npm install @xcoobee/react-native-xcoobee-payment-sdk`

with Yarn:

`yarn add @xcoobee/react-native-xcoobee-payment-sdk`

### Using

```
import XcooBeePaySDK from '@xcoobee/react-native-xcoobee-payment-sdk';

XcooBeePaySDK.setSystemConfig({
  campaignId: 'a00.aa0000000',
  formId: 'a000'
});

export default function App() {
  const XcooBeePayQR = XcooBeePaySDK.createPayQR(12.34);

  return (
    <View style={styles.container}>
      <Text>Please pay with XcooBee application.</Text>
      {XcooBeePayQR}
    </View>
  );
}
```

### Documentation

To overview documentation please follow [documentation link](./docs/index.html). 
