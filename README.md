# XcooBee Contactless Payment SDK for React Native

## Description

The XcooBee contactless payment system is a complete shopping cart and checkout system that can be included in your projects (mobile or web) quickly.
In order to fully use this you will need a XcooBee account ( Professional, Business, or  Enterprise) and an active “Payment Project” created.

The SDK simplifies the generation of URLs and QRs. 
Smart QRs and URLs can cover many different use cases.

The URLs can be send to remote user or embedded in a website to quickly add a shopping cart system with a few lines. 
Examples of this could be "Pay" button or links "add to cart" links for merchandise that is sold on the site. 

The URLs can help you build a very simply shopping system that is focused on cart and checkout. Nothing else is needed. 

Touchless smart QRs can be used with users that are directly in vicinity of your app or to start a shopping/payment process from physical media like signs and printed materials. Examples of this would include restaurant menus, flyers, catalogs, books, invoices, statements, etc..


### Installation
There is one pre-requisite.
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
      <Text>Please scan and pay touchless</Text>
      {XcooBeePayQR}
    </View>
  );
}
```

### Documentation

To overview documentation please follow [documentation link](./docs/globals.md). 
