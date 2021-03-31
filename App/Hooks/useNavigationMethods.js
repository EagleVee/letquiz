import React, { useMemo } from "react";
import {
  useRoute,
  useNavigation,
  StackActions,
  TabActions,
} from "@react-navigation/native";
import { useSelector } from "react-redux";
import ProgramTransform from "../Transforms/ProgramTransform";
import TrainerTransform from "../Transforms/TrainerTransform";

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

  function goToProgramDetail(
    paramProgram = new ProgramTransform(),
    params = {},
  ) {
    const isSubscribed = program.subscribedProgramIds.includes(paramProgram.id);
    navigation.push("ProgramDetailScreen", {
      program: paramProgram,
      isSubscribed: isSubscribed,
      ...params,
    });
  }

  function goToTrainerDetail(
    paramTrainer = new TrainerTransform(),
    params = {},
  ) {
    const isSubscribed = trainer.subscribedTrainerIds.includes(paramTrainer.id);

    navigation.push("TrainerDetailScreen", {
      trainer: paramTrainer,
      isSubscribed: isSubscribed,
      ...params,
    });
  }

  return {
    goBack,
    goToScreen,
    pushScreen,
    getParam,
    pop,
    resetStack,
    resetStackToTab,
    goToProgramDetail,
    goToTrainerDetail,
  };
};
