[@xcoobee/react-native-xcoobee-payment-sdk](../README.md) › [Globals](../globals.md) › ["XcooBeePay"](../modules/_xcoobeepay_.md) › [XcooBeePaySDK](_xcoobeepay_.xcoobeepaysdk.md)

# Class: XcooBeePaySDK

## Hierarchy

* **XcooBeePaySDK**

## Implements

* [XcooBeePayBase](../interfaces/_types_.xcoobeepaybase.md)
* [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)
* [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)‹ReactElement›

## Index

### Constructors

* [constructor](_xcoobeepay_.xcoobeepaysdk.md#constructor)

### Properties

* [config](_xcoobeepay_.xcoobeepaysdk.md#private-optional-config)
* [renderQR](_xcoobeepay_.xcoobeepaysdk.md#private-readonly-renderqr)

### Methods

* [checkConfig](_xcoobeepay_.xcoobeepaysdk.md#private-checkconfig)
* [clearSystemConfig](_xcoobeepay_.xcoobeepaysdk.md#clearsystemconfig)
* [createExternalReferenceQR](_xcoobeepay_.xcoobeepaysdk.md#createexternalreferenceqr)
* [createExternalReferenceUrl](_xcoobeepay_.xcoobeepaysdk.md#createexternalreferenceurl)
* [createMultiSelectQR](_xcoobeepay_.xcoobeepaysdk.md#createmultiselectqr)
* [createMultiSelectQRWithCost](_xcoobeepay_.xcoobeepaysdk.md#createmultiselectqrwithcost)
* [createMultiSelectUrl](_xcoobeepay_.xcoobeepaysdk.md#createmultiselecturl)
* [createMultiSelectUrlWithCost](_xcoobeepay_.xcoobeepaysdk.md#createmultiselecturlwithcost)
* [createPayQR](_xcoobeepay_.xcoobeepaysdk.md#createpayqr)
* [createPayQRWithTip](_xcoobeepay_.xcoobeepaysdk.md#createpayqrwithtip)
* [createPayUrl](_xcoobeepay_.xcoobeepaysdk.md#createpayurl)
* [createPayUrlWithTip](_xcoobeepay_.xcoobeepaysdk.md#createpayurlwithtip)
* [createSingleItemQR](_xcoobeepay_.xcoobeepaysdk.md#createsingleitemqr)
* [createSingleItemUrl](_xcoobeepay_.xcoobeepaysdk.md#createsingleitemurl)
* [createSingleSelectQR](_xcoobeepay_.xcoobeepaysdk.md#createsingleselectqr)
* [createSingleSelectUrl](_xcoobeepay_.xcoobeepaysdk.md#createsingleselecturl)
* [createSingleSelectWithCostQR](_xcoobeepay_.xcoobeepaysdk.md#createsingleselectwithcostqr)
* [createSingleSelectWithCostUrl](_xcoobeepay_.xcoobeepaysdk.md#createsingleselectwithcosturl)
* [makePayUrl](_xcoobeepay_.xcoobeepaysdk.md#private-makepayurl)
* [makeSecurePayItem](_xcoobeepay_.xcoobeepaysdk.md#private-makesecurepayitem)
* [makeSecurePayItemTotal](_xcoobeepay_.xcoobeepaysdk.md#private-makesecurepayitemtotal)
* [mapSubItems](_xcoobeepay_.xcoobeepaysdk.md#private-mapsubitems)
* [mapSubItemsWithCost](_xcoobeepay_.xcoobeepaysdk.md#private-mapsubitemswithcost)
* [setSystemConfig](_xcoobeepay_.xcoobeepaysdk.md#setsystemconfig)

## Constructors

###  constructor

\+ **new XcooBeePaySDK**(`qrRenderer?`: [QRRenderer](../modules/_types_.md#qrrenderer)): *[XcooBeePaySDK](_xcoobeepay_.xcoobeepaysdk.md)*

*Defined in [XcooBeePay.ts:33](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`qrRenderer?` | [QRRenderer](../modules/_types_.md#qrrenderer) |

**Returns:** *[XcooBeePaySDK](_xcoobeepay_.xcoobeepaysdk.md)*

## Properties

### `Private` `Optional` config

• **config**? : *[XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)*

*Defined in [XcooBeePay.ts:33](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L33)*

___

### `Private` `Readonly` renderQR

• **renderQR**: *[QRRenderer](../modules/_types_.md#qrrenderer)*

*Defined in [XcooBeePay.ts:32](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L32)*

## Methods

### `Private` checkConfig

▸ **checkConfig**(`config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *boolean*

*Defined in [XcooBeePay.ts:39](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *boolean*

___

###  clearSystemConfig

▸ **clearSystemConfig**(): *void*

*Implementation of [XcooBeePayBase](../interfaces/_types_.xcoobeepaybase.md)*

*Defined in [XcooBeePay.ts:164](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L164)*

**Returns:** *void*

___

###  createExternalReferenceQR

▸ **createExternalReferenceQR**(`reference`: string, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:510](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L510)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reference` | string | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | - |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createExternalReferenceUrl

▸ **createExternalReferenceUrl**(`reference`: string, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:356](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L356)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reference` | string | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *string*

___

###  createMultiSelectQR

▸ **createMultiSelectQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:473](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L473)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | - |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createMultiSelectQRWithCost

▸ **createMultiSelectQRWithCost**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:493](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L493)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | - |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createMultiSelectUrl

▸ **createMultiSelectUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:303](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L303)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *string*

___

###  createMultiSelectUrlWithCost

▸ **createMultiSelectUrlWithCost**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:331](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L331)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *string*

___

###  createPayQR

▸ **createPayQR**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:378](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L378)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | - |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createPayQRWithTip

▸ **createPayQRWithTip**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:396](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L396)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | - |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createPayUrl

▸ **createPayUrl**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:176](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L176)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *string*

___

###  createPayUrlWithTip

▸ **createPayUrlWithTip**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:198](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L198)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *string*

___

###  createSingleItemQR

▸ **createSingleItemQR**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:414](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L414)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | - |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createSingleItemUrl

▸ **createSingleItemUrl**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:221](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L221)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *string*

___

###  createSingleSelectQR

▸ **createSingleSelectQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:433](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L433)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | - |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createSingleSelectUrl

▸ **createSingleSelectUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:247](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L247)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *string*

___

###  createSingleSelectWithCostQR

▸ **createSingleSelectWithCostQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:453](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L453)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | - |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createSingleSelectWithCostUrl

▸ **createSingleSelectWithCostUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:275](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L275)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] | - |
`reference?` | string &#124; null | - |
`tax?` | number &#124; null | - |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *string*

___

### `Private` makePayUrl

▸ **makePayUrl**(`securePay`: [SecurePay](../modules/_types_.md#securepay)[], `forcedConfig?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [XcooBeePay.ts:97](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`securePay` | [SecurePay](../modules/_types_.md#securepay)[] |
`forcedConfig?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

### `Private` makeSecurePayItem

▸ **makeSecurePayItem**(`params`: object): *[SecurePay](../modules/_types_.md#securepay)*

*Defined in [XcooBeePay.ts:55](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L55)*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`amount?` | undefined &#124; number |
`logic?` | [SecurePayLogic](../modules/_types_.md#securepaylogic)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |

**Returns:** *[SecurePay](../modules/_types_.md#securepay)*

___

### `Private` makeSecurePayItemTotal

▸ **makeSecurePayItemTotal**(`params`: [SecurePayItem](../modules/_types_.md#securepayitem)): *[SecurePay](../modules/_types_.md#securepay)[]*

*Defined in [XcooBeePay.ts:78](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [SecurePayItem](../modules/_types_.md#securepayitem) |

**Returns:** *[SecurePay](../modules/_types_.md#securepay)[]*

___

### `Private` mapSubItems

▸ **mapSubItems**(`items`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[]): *string[]*

*Defined in [XcooBeePay.ts:140](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] |

**Returns:** *string[]*

___

### `Private` mapSubItemsWithCost

▸ **mapSubItemsWithCost**(`items`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[]): *[SecurePayLogicSubSet](../modules/_types_.md#securepaylogicsubset)[]*

*Defined in [XcooBeePay.ts:145](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] |

**Returns:** *[SecurePayLogicSubSet](../modules/_types_.md#securepaylogicsubset)[]*

___

###  setSystemConfig

▸ **setSystemConfig**(`config`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *void*

*Implementation of [XcooBeePayBase](../interfaces/_types_.xcoobeepaybase.md)*

*Defined in [XcooBeePay.ts:157](https://github.com/XcooBee/payment-sdk-react-native/blob/b11bdcd/src/XcooBeePay.ts#L157)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |   |

**Returns:** *void*
