[@xcoobee/react-native-xcoobee-payment-sdk](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Interfaces

* [XcooBeePayBase](../interfaces/_types_.xcoobeepaybase.md)
* [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)
* [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)

### Type aliases

* [QRRenderer](_types_.md#qrrenderer)
* [SecurePay](_types_.md#securepay)
* [SecurePayItem](_types_.md#securepayitem)
* [SecurePayLogic](_types_.md#securepaylogic)
* [SecurePayLogicSubSet](_types_.md#securepaylogicsubset)
* [SecurePaySubItem](_types_.md#securepaysubitem)
* [SecurePaySubItemWithCost](_types_.md#securepaysubitemwithcost)
* [XcooBeePayConfig](_types_.md#xcoobeepayconfig)
* [XcoobeePayQRConfig](_types_.md#xcoobeepayqrconfig)

## Type aliases

###  QRRenderer

Ƭ **QRRenderer**: *function*

*Defined in [types.ts:108](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L108)*

Function that creates QR Code component based on parameters.

#### Type declaration:

▸ (`value`: string, `qrConfig?`: [XcoobeePayQRConfig](_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`qrConfig?` | [XcoobeePayQRConfig](_types_.md#xcoobeepayqrconfig) |

___

###  SecurePay

Ƭ **SecurePay**: *object*

*Defined in [types.ts:157](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L157)*

Secure Pay item.

#### Type declaration:

* **0-3**? : *undefined | number*

* **0-5**? : *undefined | number*

* **0-6**? : *undefined | string*

* **l**? : *[SecurePayLogic](_types_.md#securepaylogic)[]*

___

###  SecurePayItem

Ƭ **SecurePayItem**: *object*

*Defined in [types.ts:86](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L86)*

#### Type declaration:

* **amount**: *number*

* **reference**? : *string | null*

* **tax**? : *number | null*

* **tip**? : *undefined | false | true*

___

###  SecurePayLogic

Ƭ **SecurePayLogic**: *object | object | object | object | object | object | object | object | object | object*

*Defined in [types.ts:121](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L121)*

Secure Pay logic item.

___

###  SecurePayLogicSubSet

Ƭ **SecurePayLogicSubSet**: *object*

*Defined in [types.ts:113](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L113)*

Secure Pay logic sub-set.

#### Type declaration:

* **0**: *string*

* **1**: *number*

___

###  SecurePaySubItem

Ƭ **SecurePaySubItem**: *object*

*Defined in [types.ts:179](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L179)*

Quick pay sub item.

#### Type declaration:

* **reference**: *string*

___

###  SecurePaySubItemWithCost

Ƭ **SecurePaySubItemWithCost**: *Required‹[SecurePaySubItem](_types_.md#securepaysubitem)› & object*

*Defined in [types.ts:189](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L189)*

Quick pay sub item with cost.

___

###  XcooBeePayConfig

Ƭ **XcooBeePayConfig**: *object*

*Defined in [types.ts:54](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L54)*

#### Type declaration:

* **XcooBeeDeviceId**? : *undefined | string*

* **campaignId**: *string*

* **deviceId**? : *undefined | string*

* **formId**: *string*

* **source**? : *undefined | string*

___

###  XcoobeePayQRConfig

Ƭ **XcoobeePayQRConfig**: *object*

*Defined in [types.ts:79](https://github.com/XcooBee/payment-sdk-react-native/blob/212c279/src/types.ts#L79)*

#### Type declaration:

* **size**? : *undefined | number*
