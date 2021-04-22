import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const StudySetItemStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: 360 * WIDTH_RATIO,
      paddingHorizontal: 20 * WIDTH_RATIO,
      paddingVertical: 16 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
    },
    title: {
      ...ApplicationStyles.text.h8Bold,
      flex: 1,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
