import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const RNSwitchStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const { style = {}, thumbStyle = {} } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    track: {
      width: 40 * WIDTH_RATIO,
      height: 16 * WIDTH_RATIO,
      borderRadius: 18 * WIDTH_RATIO,
      borderWidth: 1,
      justifyContent: "center",
      ...style,
    },
    thumb: {
      backgroundColor: Colors.white,
      width: 26 * WIDTH_RATIO,
      height: 26 * WIDTH_RATIO,
      borderRadius: 13 * WIDTH_RATIO,
      borderWidth: 4 * WIDTH_RATIO,
      borderColor: Colors.buttonBackground,
      ...thumbStyle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
