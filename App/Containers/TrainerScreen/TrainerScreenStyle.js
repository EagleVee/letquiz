import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";
import { Fonts } from "Themes";
export const TrainerScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.text,
    ...ApplicationStyles.utils,
    banner: {
      width: deviceWidth,
      height: deviceWidth,
      justifyContent: "flex-end",
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingBottom: 16 * WIDTH_RATIO,
    },
    title: {
      fontFamily: Fonts.type.extraBoldFont,
      fontSize: 40 * WIDTH_RATIO,
      color: "white",
    },
    subTitle: {
      fontFamily: Fonts.type.lightFont,
      fontSize: 22 * WIDTH_RATIO,
      marginTop: 10 * WIDTH_RATIO,
      color: "white",
    },
    list: {
      paddingBottom: 32 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
