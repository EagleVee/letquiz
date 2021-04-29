import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const FlipCardLargeItemStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: deviceWidth - 40 * WIDTH_RATIO,
      height: deviceWidth - 40 * WIDTH_RATIO,
    },
    card: {
      width: "100%",
      height: "100%",
      backgroundColor: Colors.cardBackground,
      ...ApplicationStyles.utils.middle,
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 14 * WIDTH_RATIO,
      borderRadius: 8 * WIDTH_RATIO,
      ...ApplicationStyles.themedShadow,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
