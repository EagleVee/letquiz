import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const TrainerCardItemStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      padding: 8 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      borderRadius: 16 * WIDTH_RATIO,
      width: (deviceWidth - 16 * 3 * WIDTH_RATIO) / 2,
    },
    innerBackground: {
      backgroundColor: Colors.background,
      borderTopRightRadius: 4 * WIDTH_RATIO,
    },
    innerFront: {
      borderTopRightRadius: 24 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      alignItems: "center",
      paddingHorizontal: 4 * WIDTH_RATIO,
      paddingTop: 12 * WIDTH_RATIO,
      paddingBottom: 4 * WIDTH_RATIO,
    },
    introduction: {
      marginTop: 9,
      width: "100%",
      ...ApplicationStyles.text.h8,
    },
    avatar: {
      width: 120 * WIDTH_RATIO,
      height: 120 * WIDTH_RATIO,
      borderRadius: 60 * WIDTH_RATIO,
      borderWidth: 4 * WIDTH_RATIO,
      borderColor: Colors.portraitBorder,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
