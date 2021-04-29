import React from "react";
import { StyleSheet } from "react-native";
import { Colors, Fonts } from "Themes";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeColors } from "../../Hooks/useThemeColors";
import { useThemeStyles } from "../../Hooks/useThemeStyles";

export const PrimaryButtonStyle = OriginalComponent => props => {
  const { style, isAvailable = true, labelStyle } = props;
  const Colors = useThemeColors();
  const ApplicationStyles = useThemeStyles();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: "100%",
      paddingVertical: 14 * WIDTH_RATIO,
      borderRadius: 4 * WIDTH_RATIO,
      backgroundColor: isAvailable ? Colors.primaryNeon : "transparent",
      ...ApplicationStyles.utils.middle,
      ...style,
    },
    buttonText: {
      ...ApplicationStyles.text.h7,
      color: isAvailable ? Colors.white : Colors.primaryNeon,
      ...labelStyle,
    },
  });

  return (
    <OriginalComponent {...props} styles={styles} isAvailable={isAvailable} />
  );
};
