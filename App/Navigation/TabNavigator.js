import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { deviceWidth, HEIGHT_RATIO, EXTRA_FOOTER_HEIGHT } from "Themes/Metrics";
import TabLabel from "Components/TabLabel/TabLabel";
import HomeScreen from "Containers/HomeScreen/HomeScreen";
import ProfileScreen from "Containers/ProfileScreen/ProfileScreen";
import SearchScreen from "Containers/SearchScreen/SearchScreen";
import { useThemeColors } from "Hooks/useThemeColors";
import { View } from "react-native";
import CreateActionModal from "../Components/CreateActionModal/CreateActionModal";

const Tab = createBottomTabNavigator();
function CreateActionModalPlaceholder() {
  return <View />;
}

function TabNavigator({ onAddTabPress }) {
  const Colors = useThemeColors();

  function HomeScreenWithProps(props) {
    return <HomeScreen {...props} onAddTabPress={onAddTabPress} />;
  }

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{}}
      tabBarOptions={{
        style: {
          width: deviceWidth,
          height: 60 * HEIGHT_RATIO + EXTRA_FOOTER_HEIGHT,
          backgroundColor: Colors.tabBackground,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="home" />;
          },
        }}
        component={HomeScreenWithProps}
      />
      <Tab.Screen
        name="SearchScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="search" />;
          },
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="CreateActionModalPlaceholder"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="add" />;
          },
          animationEnabled: true,
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            onAddTabPress();
          },
        }}
        component={CreateActionModalPlaceholder}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="profile" />;
          },
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
