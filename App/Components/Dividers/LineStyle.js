import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const LineStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const {
    color = Colors.background,
    height = 1,
    vertical = false,
    width = 1,
    style = {},
  } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      backgroundColor: color,
      height: vertical ? "100%" : height,
      width: vertical ? width : "100%",
      ...style,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
