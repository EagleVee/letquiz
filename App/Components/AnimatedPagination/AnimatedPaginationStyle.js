import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const AnimatedPaginationStyle = (OriginalComponent) => (props) => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {},
    active: {
      width: 26 * WIDTH_RATIO,
      height: 12 * WIDTH_RATIO,
      borderRadius: 6 * WIDTH_RATIO,
      backgroundColor: Colors.primaryRed,
      borderWidth: WIDTH_RATIO,
      borderColor: "white",
    },
    inactive: {
      width: 12 * WIDTH_RATIO,
      height: 12 * WIDTH_RATIO,
      borderRadius: 6 * WIDTH_RATIO,
      backgroundColor: "rgba(38, 35, 49, 0.6)",
      borderWidth: WIDTH_RATIO,
      borderColor: "white",
    },
  });

  function getInactiveStyle(isFirst, isLast) {
    return {
      width: 12 * WIDTH_RATIO,
      height: 12 * WIDTH_RATIO,
      borderRadius: 6 * WIDTH_RATIO,
      backgroundColor: "rgba(38, 35, 49, 0.6)",
      borderWidth: WIDTH_RATIO,
      borderColor: "white",
      marginHorizontal: 4 * WIDTH_RATIO,
    };
  }
  function getActiveStyle(isFirst, isLast) {
    return {
      width: 26 * WIDTH_RATIO,
      height: 12 * WIDTH_RATIO,
      borderRadius: 6 * WIDTH_RATIO,
      backgroundColor: Colors.primaryRed,
      borderWidth: WIDTH_RATIO,
      borderColor: "white",
      marginHorizontal: 4 * WIDTH_RATIO,
    };
  }

  return (
    <OriginalComponent
      {...props}
      styles={styles}
      getInactiveStyle={getInactiveStyle}
      getActiveStyle={getActiveStyle}
    />
  );
};
