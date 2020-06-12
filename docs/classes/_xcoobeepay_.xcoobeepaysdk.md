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

*Defined in [XcooBeePay.ts:35](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`qrRenderer?` | [QRRenderer](../modules/_types_.md#qrrenderer) |

**Returns:** *[XcooBeePaySDK](_xcoobeepay_.xcoobeepaysdk.md)*

## Properties

### `Private` `Optional` config

• **config**? : *[XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)*

*Defined in [XcooBeePay.ts:35](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L35)*

___

### `Private` `Readonly` renderQR

• **renderQR**: *[QRRenderer](../modules/_types_.md#qrrenderer)*

*Defined in [XcooBeePay.ts:34](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L34)*

## Methods

### `Private` checkConfig

▸ **checkConfig**(`config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *boolean*

*Defined in [XcooBeePay.ts:41](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *boolean*

___

###  clearSystemConfig

▸ **clearSystemConfig**(): *void*

*Implementation of [XcooBeePayBase](../interfaces/_types_.xcoobeepaybase.md)*

*Defined in [XcooBeePay.ts:177](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L177)*

Removes the existing global configuration from session.

**Returns:** *void*

___

###  createExternalReferenceQR

▸ **createExternalReferenceQR**(`reference`: string, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:534](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L534)*

Create URL that uses external (XcooBee Hosted) definition for cost, image, and option logic. Obtain references from
XcooBee.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reference` | string | the item description or reference for payment |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createExternalReferenceUrl

▸ **createExternalReferenceUrl**(`reference`: string, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:375](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L375)*

Create URL that uses external (XcooBee Hosted) definition for cost, image, and option logic. Obtain references from
XcooBee.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reference` | string | the external item reference. You will need to coordinate this with your XcooBee team |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override   |

**Returns:** *string*

___

###  createMultiSelectQR

▸ **createMultiSelectQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:495](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L495)*

Return QR to add a single item to cart. The item has multiple options of which any can be selected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] | - |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createMultiSelectQRWithCost

▸ **createMultiSelectQRWithCost**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:516](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L516)*

Return QR to add a single item to cart. The item has multiple options of which any can be selected. Each option can
also add cost to item total.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] | - |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createMultiSelectUrl

▸ **createMultiSelectUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:319](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L319)*

Return URL to add a single item to cart. The item has multiple options of which any can be selected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | the cost of main item |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] | the array of option items |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override  |

**Returns:** *string*

___

###  createMultiSelectUrlWithCost

▸ **createMultiSelectUrlWithCost**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:348](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L348)*

Return URL to add a single item to cart. The item has multiple options of which any can be selected. Each option
can also add cost to item total.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | the item total without any options selected |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] | the array of option items and cost |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override  |

**Returns:** *string*

___

###  createPayQR

▸ **createPayQR**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:398](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L398)*

Returns QR that can activate a single total payment. Existing items will be deleted. Only this item can be
processed. If you use zero amount, the user can enter the amount for payment.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | the total to be paid |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createPayQRWithTip

▸ **createPayQRWithTip**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:417](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L417)*

Returns a QR that can activate a total payment and predefined Tip calculator. This allows an additional Tip to be
added to the total at checkout. Existing items in cart will be removed when this item is activated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | the item main item amount to be charged. The tip will be calculated as percentage of this. |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createPayUrl

▸ **createPayUrl**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:190](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L190)*

Returns URL that can activate a single total payment. Existing items will be deleted. Only this item can be
processed. If you use zero amount, the user can enter the amount for payment.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | total payment amount |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override  |

**Returns:** *string*

___

###  createPayUrlWithTip

▸ **createPayUrlWithTip**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:213](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L213)*

Returns a URL that can activate a total payment and predefined Tip calculator. This allows an additional Tip to be
added to the total at checkout. Existing items in cart will be removed when this item is activated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | the item main item amount to be charged. The tip will be calculated as percentage of this. |
`reference?` | string &#124; null | the item description or reference for payment the description of the item |
`tax?` | number &#124; null | the included tax of the item the included tax. |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override  |

**Returns:** *string*

___

###  createSingleItemQR

▸ **createSingleItemQR**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:435](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L435)*

Return QR that adds new item to eCommerce basket.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createSingleItemUrl

▸ **createSingleItemUrl**(`amount`: number, `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:236](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L236)*

Return URL that adds new item to eCommerce basket.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | the item price of the item |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override  |

**Returns:** *string*

___

###  createSingleSelectQR

▸ **createSingleSelectQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:454](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L454)*

Return QR to add a single item to cart. The item has multiple options of which one can be selected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] | - |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createSingleSelectUrl

▸ **createSingleSelectUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:262](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L262)*

Return URL to add a single item to cart. The item has multiple options of which one can be selected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | the cost of the item |
`arrayOfItems` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] | the array of option items |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override  |

**Returns:** *string*

___

###  createSingleSelectWithCostQR

▸ **createSingleSelectWithCostQR**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig), `qrConfig?`: [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig)): *ReactElement | null*

*Implementation of [XcooBeePayQR](../interfaces/_types_.xcoobeepayqr.md)*

*Defined in [XcooBeePay.ts:475](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L475)*

Return QR to add a single item to cart. The item has multiple options of which one can be selected. Each option can
also add cost to item total.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | - |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] | - |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override |
`qrConfig?` | [XcoobeePayQRConfig](../modules/_types_.md#xcoobeepayqrconfig) |   |

**Returns:** *ReactElement | null*

___

###  createSingleSelectWithCostUrl

▸ **createSingleSelectWithCostUrl**(`amount`: number, `arrayOfItems`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[], `reference?`: string | null, `tax?`: number | null, `config?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Implementation of [XcooBeePayUrl](../interfaces/_types_.xcoobeepayurl.md)*

*Defined in [XcooBeePay.ts:291](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L291)*

Return URL to add a single item to cart. The item has multiple options of which one can be selected. Each option
can also add cost to item total.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | the amount of item without any options selected |
`arrayOfItems` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] | the array of option items and cost |
`reference?` | string &#124; null | the item description or reference for payment |
`tax?` | number &#124; null | the included tax of the item |
`config?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the method specific configuration object override  |

**Returns:** *string*

___

### `Private` makePayUrl

▸ **makePayUrl**(`securePay`: [SecurePay](../modules/_types_.md#securepay)[], `forcedConfig?`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *string*

*Defined in [XcooBeePay.ts:109](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`securePay` | [SecurePay](../modules/_types_.md#securepay)[] |
`forcedConfig?` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) |

**Returns:** *string*

___

### `Private` makeSecurePayItem

▸ **makeSecurePayItem**(`params`: object): *[SecurePay](../modules/_types_.md#securepay)*

*Defined in [XcooBeePay.ts:57](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L57)*

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

*Defined in [XcooBeePay.ts:90](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [SecurePayItem](../modules/_types_.md#securepayitem) |

**Returns:** *[SecurePay](../modules/_types_.md#securepay)[]*

___

### `Private` mapSubItems

▸ **mapSubItems**(`items`: [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[]): *string[]*

*Defined in [XcooBeePay.ts:152](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [SecurePaySubItem](../modules/_types_.md#securepaysubitem)[] |

**Returns:** *string[]*

___

### `Private` mapSubItemsWithCost

▸ **mapSubItemsWithCost**(`items`: [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[]): *[SecurePayLogicSubSet](../modules/_types_.md#securepaylogicsubset)[]*

*Defined in [XcooBeePay.ts:157](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [SecurePaySubItemWithCost](../modules/_types_.md#securepaysubitemwithcost)[] |

**Returns:** *[SecurePayLogicSubSet](../modules/_types_.md#securepaylogicsubset)[]*

___

###  setSystemConfig

▸ **setSystemConfig**(`config`: [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig)): *void*

*Implementation of [XcooBeePayBase](../interfaces/_types_.xcoobeepaybase.md)*

*Defined in [XcooBeePay.ts:170](https://github.com/XcooBee/payment-sdk-react-native/blob/8748550/src/XcooBeePay.ts#L170)*

The configuration function sets reuseable configuration for session. As an alternative you can provide a
configuration object to each of your individual calls.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | [XcooBeePayConfig](../modules/_types_.md#xcoobeepayconfig) | the global configuration object  |

**Returns:** *void*
