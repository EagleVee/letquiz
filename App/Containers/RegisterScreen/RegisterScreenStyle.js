import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { paddingBottom, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const RegisterScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    main: {
      flex: 1,
      paddingTop: 12 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
    footer: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingBottom: paddingBottom,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
