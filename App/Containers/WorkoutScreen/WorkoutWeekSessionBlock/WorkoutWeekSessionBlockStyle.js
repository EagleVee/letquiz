import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "../../../Hooks/useThemeStyles";
import { useThemeColors } from "../../../Hooks/useThemeColors";

export const WorkoutWeekSessionBlockStyle = (OriginalComponent) => (props) => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {},
    listContent: {
      paddingTop: 14 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
