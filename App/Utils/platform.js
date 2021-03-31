import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

export function isAndroid() {
  return Platform.OS === "android";
}

export function isIOs() {
  return Platform.OS === "ios";
}

export function getPlatformOS() {
  return Platform.OS;
}

export const deviceName = (async function () {
  try {
    return await DeviceInfo.getDevice();
  } catch (e) {
    return "";
  }
})();

export const deviceId = DeviceInfo.getDeviceId();
