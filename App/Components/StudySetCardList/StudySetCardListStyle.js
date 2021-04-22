import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const StudySetCardListStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    cardItem: {
      width: deviceWidth - 32 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 16 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
    },
    header: {
      paddingBottom: 12 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
