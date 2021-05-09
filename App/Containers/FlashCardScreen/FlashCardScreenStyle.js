import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const FlashCardScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    progressBarContainer: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 20 * WIDTH_RATIO,
    },
    progressTrack: {
      backgroundColor: Colors.primaryGrey,
      width: "100%",
      height: 2 * WIDTH_RATIO,
    },
    progressThumb: {
      position: "absolute",
      right: -4 * WIDTH_RATIO,
      top: -3 * WIDTH_RATIO,
      width: 8 * WIDTH_RATIO,
      height: 8 * WIDTH_RATIO,
      borderRadius: 4 * WIDTH_RATIO,
      backgroundColor: Colors.primaryNeon,
    },
    flipItem: {
      width: deviceWidth - 40 * WIDTH_RATIO,
      height: ((deviceWidth - 40 * WIDTH_RATIO) * 16) / 9,
      borderRadius: 8 * WIDTH_RATIO,
    },
    cardStack: {
      alignItems: "center",
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
