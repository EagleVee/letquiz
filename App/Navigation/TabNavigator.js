import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { deviceWidth, HEIGHT_RATIO, EXTRA_FOOTER_HEIGHT } from "Themes/Metrics";
import TabLabel from "Components/TabLabel/TabLabel";
import HomeScreen from "Containers/HomeScreen/HomeScreen";
import ProfileScreen from "Containers/ProfileScreen/ProfileScreen";
import SearchScreen from "Containers/SearchScreen/SearchScreen";
import { useThemeColors } from "Hooks/useThemeColors";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
function CreateActionModalPlaceholder() {
  return <View />;
}

function TabNavigator({ onCreateTabPress }) {
  const Colors = useThemeColors();

  function HomeScreenWithProps(props) {
    return <HomeScreen {...props} onCreateTabPress={onCreateTabPress} />;
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
            onCreateTabPress();
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
