import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const StudySetCardCarouselStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    paginationActive: {
      width: 8 * WIDTH_RATIO,
      height: 8 * WIDTH_RATIO,
      borderRadius: 4 * WIDTH_RATIO,
      backgroundColor: Colors.primaryNeon,
    },
    paginationInactive: {
      width: 6 * WIDTH_RATIO,
      height: 6 * WIDTH_RATIO,
      borderRadius: 3 * WIDTH_RATIO,
      backgroundColor: Colors.white,
    },
    paginationContainer: {
      ...ApplicationStyles.utils.middle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
