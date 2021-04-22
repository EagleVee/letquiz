import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const ProgressBarStyle = (OriginalComponent) => (props) => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const { style, progress } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      ...ApplicationStyles.utils.centerRow,
      width: "100%",
      ...style,
    },
    percentage: {
      ...ApplicationStyles.text.h9Bold,
      color: "white",
      marginRight: 9 * WIDTH_RATIO,
    },
    progressContainer: {
      flex: 1,
      backgroundColor: Colors.backgroundOpacity,
      height: 4 * WIDTH_RATIO,
      borderRadius: 2 * WIDTH_RATIO,
    },
    progress: {
      width: `${progress} %`,
      height: 4 * WIDTH_RATIO,
      borderRadius: 2 * WIDTH_RATIO,
      backgroundColor: Colors.primaryRed,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
