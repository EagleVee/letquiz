import { appleAuth } from "@invertase/react-native-apple-authentication";

export default class AppleService {
  static async getAppleAuth() {
    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      console.log("APPLE RESPONSE", appleAuthRequestResponse);

      // get current authentication state for user
      // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        return {
          token: appleAuthRequestResponse.identityToken,
          id: appleAuthRequestResponse.user,
        };
      } else {
        return {
          token: null,
          id: null,
        };
      }
    } catch (error) {
      console.log("APPLE LOGIN ERROR", error);
      return {
        token: null,
        id: null,
      };
    }
  }
}
