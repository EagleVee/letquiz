import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  deviceHeight,
  deviceWidth,
  STATUS_BAR_HEIGHT,
  tabBottom,
  WIDTH_RATIO,
} from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";
import { Fonts } from "../../Themes";

export const LaunchScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      backgroundColor: "#090110",
      alignItems: "center",
      paddingBottom: 32 * WIDTH_RATIO,
    },
    main: {
      flex: 1,
      paddingTop: 251 * WIDTH_RATIO,
      alignItems: "center",
    },
    appName: {
      marginTop: 23.5 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 32 * WIDTH_RATIO,
      color: "white",
      letterSpacing: 12.8 * WIDTH_RATIO,
    },
    webview: {
      width: deviceWidth,
      height: deviceHeight,
      backgroundColor: "#090110",
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
