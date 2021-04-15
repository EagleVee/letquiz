import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const HomeScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    header: {
      paddingTop: 30 * WIDTH_RATIO,
      backgroundColor: Colors.primary,
      alignItems: "center",
      height: 250 * WIDTH_RATIO,
      marginBottom: -60 * WIDTH_RATIO,
    },
    main: {
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
    card: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      height: 120 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      paddingTop: 12 * WIDTH_RATIO,
      borderRadius: 8 * WIDTH_RATIO,
      ...ApplicationStyles.utils.row,
      ...ApplicationStyles.themedShadow,
    },
    cardRight: {
      marginLeft: 16 * WIDTH_RATIO,
      flex: 1,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
