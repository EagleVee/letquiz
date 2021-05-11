import Config from "react-native-config";
import { isAndroid } from "../Utils/platform";

export const API_ENDPOINT_V1 = Config.RN_API_ENDPOINT_V1;
export const CLIENT_ID = isAndroid()
  ? Config.RN_CLIENT_ID_ANDROID
  : Config.RN_CLIENT_ID_IOS;
export const CLIENT_SECRET = isAndroid()
  ? Config.RN_CLIENT_SECRET_ANDROID
  : Config.RN_CLIENT_SECRET_IOS;
export const REQUEST_TIME_OUT = 30000;
export const MAX_FILE_SIZE = 25000000;
export const ONE_SIGNAL_APP_ID = Config.RN_ONE_SIGNAL_APP_ID;

console.log("API_ENDPOINT_V1", API_ENDPOINT_V1);

if (!__DEV__) {
}

export const STATUS_OK = 200;
export const STATUS_BAD_REQUEST = 400;
export const STATUS_UNAUTHORIZED = 401;
export const STATUS_NOT_FOUND = 404;
export const STATUS_INTERNAL_SERVER_ERROR = 500;
export const STATUS_BAD_GATEWAY = 502;
export const STATUS_GATE_WAY_TIMEOUT = 504;
