import { XcooBeePayQR } from './QR';
import { XcooBeePaySDK } from './XcooBeePay';

/**
 * Single instance of XcooBeePaySDK.
 */
const XcooBeePay = new XcooBeePaySDK(XcooBeePayQR);

export { XcooBeePay as default };
export * from './Shared';
