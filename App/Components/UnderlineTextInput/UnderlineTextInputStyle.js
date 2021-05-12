import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const UnderlineTextInputStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    focusedContainer: {
      paddingVertical: 8 * WIDTH_RATIO,
      borderBottomWidth: 2 * WIDTH_RATIO,
      borderBottomColor: Colors.primaryYellow,
    },
    container: {
      paddingVertical: 8 * WIDTH_RATIO,
      borderBottomWidth: WIDTH_RATIO,
      borderBottomColor: Colors.primaryTitle,
    },
    input: {
      flex: 1,
      ...ApplicationStyles.text.h8,
    },
    inputDescription: {
      marginTop: 4 * WIDTH_RATIO,
      ...ApplicationStyles.text.description,
      fontSize: 11 * WIDTH_RATIO,
      letterSpacing: 1.5 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
