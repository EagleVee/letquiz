import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, STATUS_BAR_HEIGHT, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const SimpleTabBarStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const {
    indicatorStyle,
    activeTabStyle,
    tabStyle,
    tabBarHeight,
    tabBarStyle,
    labelActiveStyle,
    labelStyle,
    tabLabels,
    containerStyle = {},
    isActive = false,
    notSafeArea = false,
    isStickyTabBar = false,
    activeBackgroundColor = Colors.cardBackground,
    inactiveBackgroundColor = Colors.background,
  } = props;

  const tabWidth =
    tabLabels.length > 4 ? deviceWidth / 3.5 : deviceWidth / tabLabels.length;
  const tabHeight = tabBarHeight ? tabBarHeight : 48;
  const backgroundColor = isActive
    ? activeBackgroundColor
    : inactiveBackgroundColor;

  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      backgroundColor: backgroundColor,
      paddingTop: notSafeArea && isStickyTabBar ? STATUS_BAR_HEIGHT : 0,
      ...containerStyle,
    },
    tabContent: {
      height: tabHeight,
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
      height: 2 * WIDTH_RATIO,
      backgroundColor: Colors.primaryRed,
      ...indicatorStyle,
    },
    indicatorInactive: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: WIDTH_RATIO,
      backgroundColor: Colors.tab.line,
    },
    statusBarPlaceholder: {
      height: STATUS_BAR_HEIGHT,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
