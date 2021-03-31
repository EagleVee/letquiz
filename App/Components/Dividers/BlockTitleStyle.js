import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const BlockTitleStyle = OriginalComponent => props => {
  const { padding = 16 * WIDTH_RATIO, titleStyle } = props;
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      paddingHorizontal: padding,
    },
    title: {
      ...ApplicationStyles.text.h6Bold,
      ...titleStyle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
