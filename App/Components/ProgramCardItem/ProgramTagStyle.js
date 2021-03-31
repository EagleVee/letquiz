import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const ProgramTagStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      flexDirection: "row",
      alignItems: "center",
      // borderRadius: 12 * WIDTH_RATIO,
      height: 24 * WIDTH_RATIO,
      // backgroundColor: Colors.programTagBackground,
      // paddingHorizontal: 8 * WIDTH_RATIO,
      marginRight: 16 * WIDTH_RATIO,
    },
    text: {
      marginLeft: 8 * WIDTH_RATIO,
      ...ApplicationStyles.text.h8,
      color: Colors.highlightText,
    },
    icon: {
      width: 17 * WIDTH_RATIO,
      height: 17 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
