import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const IconWhiteTagStyle = OriginalComponent => props => {
  const { width = "100%" } = props;
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: width,
      padding: 8 * WIDTH_RATIO,
      borderRadius: 16 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      borderWidth: WIDTH_RATIO,
      borderColor: Colors.divider,
      flexDirection: "row",
      alignItems: "center",
    },
    iconContainer: {
      width: 56 * WIDTH_RATIO,
      height: 56 * WIDTH_RATIO,
      backgroundColor: Colors.background,
      borderRadius: 28 * WIDTH_RATIO,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      width: 32 * WIDTH_RATIO,
      height: 32 * WIDTH_RATIO,
    },
    title: {
      ...ApplicationStyles.text.h7,
      flex: 1,
      marginLeft: 12 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
