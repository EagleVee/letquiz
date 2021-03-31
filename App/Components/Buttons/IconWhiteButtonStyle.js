import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const IconWhiteButtonStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: 82 * WIDTH_RATIO,
      height: 82 * WIDTH_RATIO,
      borderRadius: 16 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      borderWidth: WIDTH_RATIO,
      borderColor: Colors.border,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      width: 48 * WIDTH_RATIO,
      height: 48 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
