import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const LoginInputStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    inputContainer: {
      paddingBottom: 8 * WIDTH_RATIO,
      borderBottomWidth: WIDTH_RATIO,
      borderBottomColor: Colors.calendarBorder,
      ...ApplicationStyles.utils.centerRow,
    },
    input: {
      flex: 1,
      ...ApplicationStyles.text.h7,
    },
    eyeButton: {
      padding: 8 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
