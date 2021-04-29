import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const FlipCardItemStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: deviceWidth - 32 * WIDTH_RATIO,
      height: ((deviceWidth - 32 * WIDTH_RATIO) * 3) / 4,
      backgroundColor: Colors.background,
    },
    card: {
      width: "100%",
      height: "100%",
      backgroundColor: Colors.cardBackground,
      ...ApplicationStyles.utils.middle,
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 14 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
