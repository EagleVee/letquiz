import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { WIDTH_RATIO } from "../Themes/Metrics";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
export const TabLabel = {
  home: "Tab.WorkOut",
  search: "Tab.Trainer",
  profile: "Tab.Profile",
};

export const TabIcon = {
  home: props => (
    <Ionicons name={"home-outline"} size={24 * WIDTH_RATIO} {...props} />
  ),
  search: props => (
    <Ionicons name={"search"} size={24 * WIDTH_RATIO} {...props} />
  ),
  add: props => (
    <Feather name={"plus-circle"} size={24 * WIDTH_RATIO} {...props} />
  ),
  profile: props => (
    <Ionicons
      name={"ios-person-circle-outline"}
      size={24 * WIDTH_RATIO}
      {...props}
    />
  ),
};
