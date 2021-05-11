import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { STATUS_BAR_HEIGHT, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const BackHeaderBarStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const {
    notSafeArea = false,
    backgroundColor = Colors.cardBackground,
  } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: notSafeArea ? STATUS_BAR_HEIGHT : 0,
      backgroundColor: backgroundColor,
    },
    backButton: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingTop: 16 * WIDTH_RATIO,
      paddingBottom: 20 * WIDTH_RATIO,
      width: "20%",
    },
    title: {
      flex: 1,
      ...ApplicationStyles.text.h7,
      // textAlign: "center",
    },
    placeholder: {
      width: "20%",
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
