import React, { useMemo } from "react";
import {
  useRoute,
  useNavigation,
  StackActions,
  TabActions,
} from "@react-navigation/native";
import { useSelector } from "react-redux";

export const useNavigationMethods = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const program = useSelector(state => state.program);
  const trainer = useSelector(state => state.trainer);

  function goBack() {
    navigation.goBack();
  }

  function pop(count) {
    try {
      navigation.pop(count);
    } catch (e) {
      console.log(`Cannot pop ${count} screens`);
    }
  }

  function goToScreen(screenName, params = {}) {
    navigation.navigate(screenName, params);
  }

  function pushScreen(screenName, params = {}) {
    navigation.push(screenName, params);
  }

  function getParam(key, defaultValue) {
    return useMemo(() => {
      return route.params && route.params[key]
        ? route.params[key]
        : defaultValue;
    }, []);
  }

  function resetStack(screenName) {
    navigation.dispatch(StackActions.replace(screenName));
  }

  function resetStackToTab() {
    navigation.dispatch(StackActions.replace("Tab"));
  }

  return {
    goBack,
    goToScreen,
    pushScreen,
    getParam,
    pop,
    resetStack,
    resetStackToTab,
  };
};
