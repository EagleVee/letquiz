import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { deviceWidth, HEIGHT_RATIO, EXTRA_FOOTER_HEIGHT } from "Themes/Metrics";
import TabLabel from "Components/TabLabel/TabLabel";
import WorkoutScreen from "Containers/WorkoutScreen/WorkoutScreen";
import TrainerScreen from "Containers/TrainerScreen/TrainerScreen";
import ProfileScreen from "Containers/ProfileScreen/ProfileScreen";
import { useThemeColors } from "../Hooks/useThemeColors";

const Tab = createBottomTabNavigator();

function TabNavigator(props) {
  const Colors = useThemeColors();
  return (
    <Tab.Navigator
      initialRouteName="WorkoutScreen"
      screenOptions={{}}
      tabBarOptions={{
        style: {
          width: deviceWidth,
          height: 60 * HEIGHT_RATIO + EXTRA_FOOTER_HEIGHT,
          backgroundColor: Colors.tabBackground,
        },
      }}>
      <Tab.Screen
        name="WorkoutScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="workout" />;
          },
        }}
        component={WorkoutScreen}
      />
      <Tab.Screen
        name="TrainerScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="trainer" />;
          },
        }}
        component={TrainerScreen}
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
