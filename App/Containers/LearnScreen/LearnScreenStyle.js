import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const LearnScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    progressBarContainer: {},
    closeButton: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 12 * WIDTH_RATIO,
      marginRight: 32 * WIDTH_RATIO,
    },
    header: {},
    headerRow: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 12 * WIDTH_RATIO,
      paddingBottom: 4 * WIDTH_RATIO,
      paddingRight: 32 * WIDTH_RATIO,
    },
    headerItem: {},
    headerTextActive: {
      ...ApplicationStyles.text.h8,
      color: Colors.active,
    },
    headerTextInactive: {
      ...ApplicationStyles.text.h8,
      color: Colors.inactive,
    },
  });

  function getHeaderTextStyle(stage, index) {
    return index === stage
      ? styles.headerTextActive
      : styles.headerTextInactive;
  }

  return (
    <OriginalComponent
      {...props}
      styles={styles}
      getHeaderTextStyle={getHeaderTextStyle}
    />
  );
};
