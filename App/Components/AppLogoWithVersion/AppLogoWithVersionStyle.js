import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const AppLogoWithVersionStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    name: {
      marginTop: 7 * WIDTH_RATIO,
      ...ApplicationStyles.text.h6,
      letterSpacing: 8 * WIDTH_RATIO,
    },
    version: {
      marginTop: 2 * WIDTH_RATIO,
      ...ApplicationStyles.text.h9,
      color: Colors.inputTitle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
