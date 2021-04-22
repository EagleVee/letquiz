import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceHeight, tabBottom, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const CreateActionModalStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      backgroundColor: Colors.cardBackground,
      paddingBottom: tabBottom,
    },
    actionButton: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 14 * WIDTH_RATIO,
      ...ApplicationStyles.utils.centerRow,
    },
    actionButtonText: {
      ...ApplicationStyles.text.h8,
      marginLeft: 12 * WIDTH_RATIO,
    },
    screenContainer: {
      height: deviceHeight,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      justifyContent: "flex-end",
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
