import React, { useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { deviceWidth, HEIGHT_RATIO, EXTRA_FOOTER_HEIGHT } from "Themes/Metrics";
import TabLabel from "Components/TabLabel/TabLabel";
import HomeScreen from "Containers/HomeScreen/HomeScreen";
import ProfileScreen from "Containers/ProfileScreen/ProfileScreen";
import SearchScreen from "Containers/SearchScreen/SearchScreen";
import { useThemeColors } from "Hooks/useThemeColors";
import { TouchableWithoutFeedback, View } from "react-native";
import CreateActionModal from "../Components/CreateActionModal/CreateActionModal";
import { useDispatch, useSelector } from "react-redux";
import ModalActions from "../Redux/Actions/ModalActions";

const Tab = createBottomTabNavigator();
function CreateActionModalPlaceholder() {
  return <View />;
}

const styles = {
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButton: {
    width: deviceWidth / 4,
    alignItems: "center",
    justifyContent: "center",
  },
};

function CustomTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const Colors = useThemeColors();
  const { createActionModalVisible } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  function setCreateActionModalVisible(visible) {
    dispatch(ModalActions.setCreateActionModalVisible(visible));
  }

  function onTabPress(route, focused) {
    if (route.name === "CreateActionModal") {
      if (createActionModalVisible) {
        setCreateActionModalVisible(false);
      } else {
        setCreateActionModalVisible(true);
      }
    } else {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });
      if (!focused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    }
  }
  return (
    <View
      style={{
        width: deviceWidth,
        height: 60 * HEIGHT_RATIO + EXTRA_FOOTER_HEIGHT,
        backgroundColor: Colors.tabBackground,
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const focused = index === state.index;
        return (
          <View style={styles.tab} key={index.toString()}>
            <TouchableWithoutFeedback
              onPress={() => {
                onTabPress(route, focused);
              }}>
              <View>
                {route.name === "CreateActionModal" ? (
                  <TabLabel focused={focused} name={route.name} />
                ) : (
                  <TabLabel focused={focused} name={route.name} />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
      <CreateActionModal isVisible={createActionModalVisible} />
    </View>
  );
}

function TabNavigator(props) {
  const Colors = useThemeColors();
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        // options={{
        //   tabBarLabel: ({ focused }) => {
        //     return <TabLabel focused={focused} name="home" />;
        //   },
        // }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="SearchScreen"
        // options={{
        //   tabBarLabel: ({ focused }) => {
        //     return <TabLabel focused={focused} name="search" />;
        //   },
        // }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="CreateActionModal"
        // options={{
        //   tabBarLabel: ({ focused }) => {
        //     return <TabLabel focused={focused} name="add" />;
        //   },
        //   animationEnabled: true,
        // }}
        component={CreateActionModal}
      />
      <Tab.Screen
        name="ProfileScreen"
        // options={{
        //   tabBarLabel: ({ focused }) => {
        //     return <TabLabel focused={focused} name="profile" />;
        //   },
        // }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
