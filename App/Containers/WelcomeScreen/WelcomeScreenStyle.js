import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from 'Hooks/useThemeStyles';
import { useThemeColors } from 'Hooks/useThemeColors';

export const WelcomeScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    main: {
      ...ApplicationStyles.utils.middle,
      flex: 1,
      paddingTop: 20 * WIDTH_RATIO,
    },
    welcomeImage: {
      marginTop: 127 * WIDTH_RATIO,
      width: 207 * WIDTH_RATIO,
      height: 207 * WIDTH_RATIO,
    },
    contentContainer: {
      paddingTop: 20 * WIDTH_RATIO,
    },
    textContainer: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      width: deviceWidth,
      ...ApplicationStyles.utils.centerRow,
      justifyContent: "center"
    },
    text: {
      ...ApplicationStyles.text.h8,
      textAlign: "center"
    },
    dot: {
      width: 8 * WIDTH_RATIO,
      height: 8 * WIDTH_RATIO,
      borderRadius: 4 * WIDTH_RATIO,
    },
    activeDot: {
      width: 16 * WIDTH_RATIO,
      height: 16 * WIDTH_RATIO,
      borderRadius: 8 * WIDTH_RATIO,
    }
  });

  return (
    <OriginalComponent
      {...props}
      styles={styles}
    />
  );
}
