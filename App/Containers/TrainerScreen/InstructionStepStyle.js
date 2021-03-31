import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const InstructionStepStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: 300 * WIDTH_RATIO,
      height: 128 * WIDTH_RATIO,
      padding: 12 * WIDTH_RATIO,
      borderRadius: 16 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      flexDirection: "row",
    },
    imageBackground: {
      width: 68 * WIDTH_RATIO,
      height: 68 * WIDTH_RATIO,
      borderRadius: 34 * WIDTH_RATIO,
      backgroundColor: Colors.background,
      ...ApplicationStyles.utils.middle,
    },
    image: {
      width: 68 * WIDTH_RATIO,
      height: 68 * WIDTH_RATIO,
    },
    main: {
      paddingLeft: 12 * WIDTH_RATIO,
      flex: 1,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
