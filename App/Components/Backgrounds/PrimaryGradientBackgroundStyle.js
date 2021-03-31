import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const PrimaryGradientBackgroundStyle = (OriginalComponent) => (
  props,
) => {
  const { size = 20 * WIDTH_RATIO, style = {} } = props;
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: "center",
      justifyContent: "center",
      ...style,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
