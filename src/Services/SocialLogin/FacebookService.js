import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from "react-native-fbsdk";

export default class FacebookService {
  static async loginFacebook() {
    return await LoginManager.logInWithPermissions(["public_profile", "email"]);
  }

  static async getFacebookAuth() {
    try {
      const response = await this.loginFacebook();
      const data = await AccessToken.getCurrentAccessToken();
      let id = "";
      const infoRequest = new GraphRequest("/me", null, (error, result) => {
        if (error) {
          return false;
        }

        id = result.id;
      });

      await new GraphRequestManager().addRequest(infoRequest).start();

      return {
        token: data.accessToken.toString(),
        id: id,
      };
    } catch (error) {
      return null;
    }
  }
}
