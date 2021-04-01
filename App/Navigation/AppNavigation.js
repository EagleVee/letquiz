import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import LaunchScreen from "Containers/LaunchScreen/LaunchScreen";
import WelcomeScreen from "../Containers/WelcomeScreen/WelcomeScreen";

const Stack = createStackNavigator();

function AppNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
