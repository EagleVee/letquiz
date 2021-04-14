import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { deviceWidth, HEIGHT_RATIO, EXTRA_FOOTER_HEIGHT } from "Themes/Metrics";
import TabLabel from "Components/TabLabel/TabLabel";
import HomeScreen from "Containers/HomeScreen/HomeScreen";
import ProfileScreen from "Containers/ProfileScreen/ProfileScreen";
import SearchScreen from "Containers/SearchScreen/SearchScreen";
import { useThemeColors } from "Hooks/useThemeColors";

const Tab = createBottomTabNavigator();

function TabNavigator(props) {
  const Colors = useThemeColors();
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
        component={HomeScreen}
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
