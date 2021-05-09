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

const Stack = createStackNavigator();

function AppNavigation(props) {
  const [actionModalVisible, setActionModalVisible] = useState(false);

  function onCloseActionModal() {
    setActionModalVisible(false);
  }

  function onOpenActionModal() {
    setActionModalVisible(true);
  }

  function TabWithActionModal(props) {
    return (
      <>
        <TabNavigator {...props} onCreateTabPress={onOpenActionModal} />
        <CreateActionModal
          isVisible={actionModalVisible}
          onBackdropPress={onCloseActionModal}
          onBackButtonPress={onCloseActionModal}
          onVisibleChange={setActionModalVisible}
        />
      </>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="Tab" component={TabWithActionModal} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="StudySetDetailScreen"
          component={StudySetDetailScreen}
        />
        <Stack.Screen name="FlashCardScreen" component={FlashCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
