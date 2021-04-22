import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { tabBottom, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const StudySetDetailScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    footer: {
      marginHorizontal: 16 * WIDTH_RATIO,
      paddingTop: 16 * WIDTH_RATIO,
      paddingBottom: 16 * WIDTH_RATIO + tabBottom,
    },
    utilButton: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingTop: 16 * WIDTH_RATIO,
      paddingBottom: 20 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
