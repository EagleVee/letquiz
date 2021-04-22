import { Linking } from "react-native";

export default class LinkingService {
  static call(phoneNumber) {
    const url = "tel:" + phoneNumber;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log("Can't handle url: " + url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  }

  static openURL(url) {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log("Can't handle url: " + url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  }
}
