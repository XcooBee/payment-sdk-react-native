[@xcoobee/react-native-xcoobee-payment-sdk](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [XcooBeePayQR](_types_.xcoobeepayqr.md)

# Interface: XcooBeePayQR ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **XcooBeePayQR**

## Implemented by

* [XcooBeePaySDK](../classes/_xcoobeepay_.xcoobeepaysdk.md)

## Index

### Methods

* [createExternalReferenceQR](_types_.xcoobeepayqr.md#createexternalreferenceqr)
* [createMultiSelectQR](_types_.xcoobeepayqr.md#createmultiselectqr)
* [createMultiSelectQRWithCost](_types_.xcoobeepayqr.md#createmultiselectqrwithcost)
* [createPayQR](_types_.xcoobeepayqr.md#createpayqr)
* [createPayQRWithTip](_types_.xcoobeepayqr.md#createpayqrwithtip)
* [createSingleItemQR](_types_.xcoobeepayqr.md#createsingleitemqr)
* [createSingleSelectQR](_types_.xcoobeepayqr.md#createsingleselectqr)
* [createSingleSelectWithCostQR](_types_.xcoobeepayqr.md#createsingleselectwithcostqr)

## Methods

###  createExternalReferenceQR

▸ **createExternalReferenceQR**(`reference`: string, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *T | null*

*Defined in [types.ts:46](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`reference` | string |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |

**Returns:** *T | null*

___

###  createMultiSelectQR

▸ **createMultiSelectQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *T | null*

*Defined in [types.ts:42](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |

**Returns:** *T | null*

___

###  createMultiSelectQRWithCost

▸ **createMultiSelectQRWithCost**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *T | null*

*Defined in [types.ts:44](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |

**Returns:** *T | null*

___

###  createPayQR

▸ **createPayQR**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *T | null*

*Defined in [types.ts:32](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |

**Returns:** *T | null*

___

###  createPayQRWithTip

▸ **createPayQRWithTip**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *T | null*

*Defined in [types.ts:34](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |

**Returns:** *T | null*

___

###  createSingleItemQR

▸ **createSingleItemQR**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *T | null*

*Defined in [types.ts:36](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |

**Returns:** *T | null*

___

###  createSingleSelectQR

▸ **createSingleSelectQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *T | null*

*Defined in [types.ts:38](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |

**Returns:** *T | null*

___

###  createSingleSelectWithCostQR

▸ **createSingleSelectWithCostQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *T | null*

*Defined in [types.ts:40](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |

**Returns:** *T | null*
