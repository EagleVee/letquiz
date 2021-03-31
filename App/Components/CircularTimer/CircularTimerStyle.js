import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const CircularTimerStyle = (OriginalComponent) => (props) => {
  const { textSize = 24 * WIDTH_RATIO } = props;
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {},
    timer: {
      ...ApplicationStyles.text.h5Bold,
      color: "white",
      fontSize: textSize,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
