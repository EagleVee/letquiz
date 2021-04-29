import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, tabBottom, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const AppTabBarStyle = (OriginalComponent) => (props) => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const {
    children,
    indicatorStyle,
    activeTabStyle,
    tabStyle,
    tabBarHeight,
    tabBarStyle,
    labelActiveStyle,
    labelStyle,
  } = props;

  const childrenLength = children && children.length ? children.length : 1;
  const tabWidth =
    childrenLength > 4 ? deviceWidth / 3.5 : deviceWidth / childrenLength;
  const tabHeight = tabBarHeight ? tabBarHeight : 48;

  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {},
    scene: {
      width: deviceWidth,
    },
    tabContent: {
      height: tabHeight,
      backgroundColor: Colors.background,
      ...tabBarStyle,
    },
    tabActive: {
      width: tabWidth,
      height: tabHeight,
      ...ApplicationStyles.utils.middle,
      ...activeTabStyle,
    },
    tab: {
      width: tabWidth,
      height: tabHeight,
      ...ApplicationStyles.utils.middle,
      ...tabStyle,
    },
    label: {
      ...ApplicationStyles.text.h8,
      color: Colors.primaryInactive,
      textAlign: "center",
      ...labelStyle,
    },
    labelActive: {
      ...ApplicationStyles.text.h8,
      color: Colors.primaryRed,
      textAlign: "center",
      ...labelActiveStyle,
    },
    indicatorActive: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 2,
      backgroundColor: Colors.primaryRed,
      ...indicatorStyle,
    },
  });

  return (
    <OriginalComponent
      {...props}
      styles={styles}
      childrenLength={childrenLength}
    />
  );
};
