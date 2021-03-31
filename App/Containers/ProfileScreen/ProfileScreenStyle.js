import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const ProfileScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.text,
    ...ApplicationStyles.utils,
    container: {},
    profileMain: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingTop: 20 * WIDTH_RATIO,
      paddingBottom: 40 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
