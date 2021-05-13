import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import LaunchScreen from "Containers/LaunchScreen/LaunchScreen";
import WelcomeScreen from "../Containers/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../Containers/LoginScreen/LoginScreen";
import CreateActionModal from "../Components/CreateActionModal/CreateActionModal";
import StudySetDetailScreen from "../Containers/StudySetDetailScreen/StudySetDetailScreen";
import FlashCardScreen from "../Containers/FlashCardScreen/FlashCardScreen";
import StudySetEditScreen from "../Containers/StudySetEditScreen/StudySetEditScreen";
import RegisterScreen from "../Containers/RegisterScreen/RegisterScreen";
import LearnScreen from "../Containers/LearnScreen/LearnScreen";

const Stack = createStackNavigator();

function AppNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LearnScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="StudySetDetailScreen"
          component={StudySetDetailScreen}
        />
        <Stack.Screen
          name="StudySetEditScreen"
          component={StudySetEditScreen}
        />
        <Stack.Screen name="FlashCardScreen" component={FlashCardScreen} />
        <Stack.Screen name="LearnScreen" component={LearnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
