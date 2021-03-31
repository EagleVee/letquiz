import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const CheckboxStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const {
    outline = false,
    size = 24 * WIDTH_RATIO,
    backgroundColor = Colors.checkboxBackground,
    borderColor = Colors.primaryInactive,
  } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: outline
      ? {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: WIDTH_RATIO,
          borderColor: borderColor,
          ...ApplicationStyles.utils.middle,
        }
      : {},
    unchecked: outline
      ? {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
          borderWidth: WIDTH_RATIO,
          borderColor: borderColor,
        }
      : {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
        },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
