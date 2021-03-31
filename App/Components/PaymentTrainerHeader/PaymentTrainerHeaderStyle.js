import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const PaymentTrainerHeaderStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    header: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 16 * WIDTH_RATIO,
      flexDirection: "row",
    },
    avatar: {
      width: 60 * WIDTH_RATIO,
      height: 60 * WIDTH_RATIO,
      borderRadius: 30 * WIDTH_RATIO,
    },
    trainerInfo: {
      paddingLeft: 12 * WIDTH_RATIO,
      justifyContent: "center",
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
