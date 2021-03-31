import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";

GoogleSignin.configure({
  webClientId:
    "673991717827-uo1u12qmqbk0hah2o09m5mo1d0c6m0lj.apps.googleusercontent.com",
  iosClientId:
    "673991717827-tb893qub8lobtjih6u84v8qrv4jt9a0v.apps.googleusercontent.com",
});

class GoogleService {
  static async loginGoogle() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      return await GoogleSignin.signIn();
    } catch (error) {
      console.log("GOOGLE LOGIN ERROR", JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // userProfile cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
        return error;
      }
    }
  }

  static async getGoogleAuth() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log("GOOGLE LOGIN RESPONSE", userInfo);
      return {
        token: userInfo.idToken,
        id: userInfo.user.id,
      };
    } catch (error) {
      return null;
    }
  }

  static async logoutGoogle() {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (e) {
      console.log(e);
    }
  }
}

export default GoogleService;
