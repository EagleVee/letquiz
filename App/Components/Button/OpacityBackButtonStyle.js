import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { STATUS_BAR_HEIGHT, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const OpacityBackButtonStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    backButton: {
      position: "absolute",
      top: STATUS_BAR_HEIGHT + 10,
      left: 16 * WIDTH_RATIO,
      width: 40 * WIDTH_RATIO,
      height: 40 * WIDTH_RATIO,
      backgroundColor: Colors.primaryTitleOpacity(0.3),
      borderRadius: 8 * WIDTH_RATIO,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
