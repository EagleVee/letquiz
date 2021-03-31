import React from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const WorkoutScreenStyle = (OriginalComponent) => (props) => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.text,
    container: {},
    greeting: {
      ...ApplicationStyles.text.h8,
      paddingTop: 10 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
