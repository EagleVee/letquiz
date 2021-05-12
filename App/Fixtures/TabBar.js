import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { WIDTH_RATIO } from "../Themes/Metrics";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";

export const TabIcon = {
  HomeScreen: props => (
    <Ionicons name={"home-outline"} size={24 * WIDTH_RATIO} {...props} />
  ),
  SearchScreen: props => (
    <Ionicons name={"search"} size={24 * WIDTH_RATIO} {...props} />
  ),
  CreateActionModal: props => (
    <Feather name={"plus-circle"} size={24 * WIDTH_RATIO} {...props} />
  ),
  ProfileScreen: props => (
    <Ionicons
      name={"ios-person-circle-outline"}
      size={24 * WIDTH_RATIO}
      {...props}
    />
  ),
};
