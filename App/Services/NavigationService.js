import { CommonActions } from "@react-navigation/native";

export default class NavigationService {
  static goToScreen(navigation, screenName, params = {}) {
    navigation.navigate(screenName, params);
  }

  static goToScreenWithReset(navigation, screenName, params = {}) {
    navigation.push(screenName, params);
  }

  static goToSpecificScreenInStack(
    navigation,
    stackName,
    screenName,
    params = {},
  ) {
    const insertStack = (stackName, params) => (state) => {
      const routes = [...state.routes, { name: stackName }];

      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    };

    navigation.dispatch(insertStack(stackName, params));
  }
}
