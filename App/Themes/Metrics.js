import { Dimensions, StatusBar } from "react-native";
import DeviceInfo from "react-native-device-info";
import { isIOs } from "../Utils/platform";

const { width, height } = Dimensions.get("window");

const NORMAL_STATUS_BAR_HEIGHT = isIOs() ? 20 : StatusBar.currentHeight;

const NOTCH_STATUS_BAR_HEIGHT = 44;

export const hasNotch = DeviceInfo.hasNotch();
export const paddingBottom = hasNotch ? 32 : 20;
export const tabBottom = hasNotch ? 20 : 0;

export const STATUS_BAR_HEIGHT = hasNotch
  ? NOTCH_STATUS_BAR_HEIGHT
  : NORMAL_STATUS_BAR_HEIGHT;

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

const baseWidth = 414;
const baseHeight = 896;

export const WIDTH_RATIO = deviceWidth / baseWidth;
export const HEIGHT_RATIO = deviceHeight / baseHeight;

console.log("BASE WIDTH:", baseWidth);
console.log("BASE HEIGHT:", baseHeight);
console.log("HAS NOTCH:", hasNotch);
console.log("DEVICE WIDTH:", deviceWidth);
console.log("DEVICE HEIGHT:", deviceHeight);
console.log("WIDTH RATIO:", WIDTH_RATIO);
console.log("HEIGHT RATIO:", HEIGHT_RATIO);

export const EXTRA_HEADER_HEIGHT = hasNotch ? NOTCH_STATUS_BAR_HEIGHT : 0;
export const EXTRA_FOOTER_HEIGHT = hasNotch ? 20 : 0;

const metrics = {
  marginHorizontal: 15,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: isIOs() ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
