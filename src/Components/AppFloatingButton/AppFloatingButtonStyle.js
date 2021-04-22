import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { tabBottom, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const AppFloatingButtonStyle = OriginalComponent => props => {
  const {
    isActive = true,
    style = {},
    floating = true,
    outline = false,
    background = true,
    ...otherProps
  } = props;
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const gradientColors = isActive
    ? Colors.primaryGradient
    : [Colors.footer.background, Colors.footer.background];
  const containerAbsoluteStyle =
    floating === true
      ? {
          position: "absolute",
          bottom: 28 * WIDTH_RATIO + tabBottom,
          left: 0,
        }
      : {};
  const backgroundStyle =
    background === true
      ? {
          bottom: 0,
          paddingTop: 12 * WIDTH_RATIO,
          borderTopLeftRadius: 36 * WIDTH_RATIO,
          borderTopRightRadius: 36 * WIDTH_RATIO,
          paddingBottom: 28 * WIDTH_RATIO + tabBottom,
          backgroundColor: Colors.footer.background,
        }
      : {};
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      ...containerAbsoluteStyle,
      ...backgroundStyle,
      width: "100%",
      paddingHorizontal: 16 * WIDTH_RATIO,
      ...style,
    },
    button: {
      borderWidth: outline === true ? 4 * WIDTH_RATIO : 0,
      borderRadius: 26 * WIDTH_RATIO,
      borderColor: Colors.cardBackground,
      ...ApplicationStyles.utils.shadow,
    },
    buttonInner: {
      paddingVertical: 10 * WIDTH_RATIO,
      alignItems: "center",
      borderRadius: 26 * WIDTH_RATIO,
    },
    title: {
      ...ApplicationStyles.text.h8Bold,
      color: "white",
    },
  });

  return (
    <OriginalComponent
      {...otherProps}
      styles={styles}
      colors={gradientColors}
    />
  );
};
