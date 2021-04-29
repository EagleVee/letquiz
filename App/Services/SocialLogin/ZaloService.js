import ZaloKit from "react-native-zalo-kit";

export default class ZaloService {
  static async loginZalo() {
    try {
      return await ZaloKit.login(ZaloKit.Constants.AUTH_VIA_APP_OR_WEB);
    } catch (error) {
      console.log("ZALO LOGIN ERROR", error);
      return null;
    }
  }

  static async getZaloUserProfile() {
    try {
      return await ZaloKit.getUserProfile();
    } catch (error) {
      console.log("ZALO GET USER PROFILE ERROR", error);
      return null;
    }
  }

  static async getZaloAuth() {
    const token = await this.loginZalo();
    const profile = await this.getZaloUserProfile();
    return {
      token: token,
      id: profile.id,
    };
  }

  static async getApplicationHashKey() {
    try {
      const key = await ZaloKit.getApplicationHashKey();
      console.log("ZALO HASH KEY: ", key);
    } catch (error) {
      console.log(error);
    }
  }
}
