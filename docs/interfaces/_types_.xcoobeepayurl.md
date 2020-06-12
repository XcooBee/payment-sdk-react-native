[@xcoobee/react-native-xcoobee-payment-sdk](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [XcooBeePayUrl](_types_.xcoobeepayurl.md)

# Interface: XcooBeePayUrl

## Hierarchy

* **XcooBeePayUrl**

## Implemented by

* [XcooBeePaySDK](../classes/_xcoobeepay_.xcoobeepaysdk.md)

## Index

### Methods

* [createExternalReferenceUrl](_types_.xcoobeepayurl.md#createexternalreferenceurl)
* [createMultiSelectUrl](_types_.xcoobeepayurl.md#createmultiselecturl)
* [createMultiSelectUrlWithCost](_types_.xcoobeepayurl.md#createmultiselecturlwithcost)
* [createPayUrl](_types_.xcoobeepayurl.md#createpayurl)
* [createPayUrlWithTip](_types_.xcoobeepayurl.md#createpayurlwithtip)
* [createSingleItemUrl](_types_.xcoobeepayurl.md#createsingleitemurl)
* [createSingleSelectUrl](_types_.xcoobeepayurl.md#createsingleselecturl)
* [createSingleSelectWithCostUrl](_types_.xcoobeepayurl.md#createsingleselectwithcosturl)

## Methods

###  createExternalReferenceUrl

▸ **createExternalReferenceUrl**(`reference`: string, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [types.ts:25](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`reference` | string |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

###  createMultiSelectUrl

▸ **createMultiSelectUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [types.ts:21](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

###  createMultiSelectUrlWithCost

▸ **createMultiSelectUrlWithCost**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [types.ts:23](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

###  createPayUrl

▸ **createPayUrl**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [types.ts:11](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

###  createPayUrlWithTip

▸ **createPayUrlWithTip**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [types.ts:13](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

###  createSingleItemUrl

▸ **createSingleItemUrl**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [types.ts:15](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

###  createSingleSelectUrl

▸ **createSingleSelectUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [types.ts:17](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

###  createSingleSelectWithCostUrl

▸ **createSingleSelectWithCostUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [types.ts:19](https://github.com/XcooBee/payment-sdk-react-native/blob/bd7e09a/src/types.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] |
`reference?` | string &#124; null |
`tax?` | number &#124; null |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*
