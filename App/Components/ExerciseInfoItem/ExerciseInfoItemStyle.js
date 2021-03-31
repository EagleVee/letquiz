import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Fonts } from "Themes";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const ExerciseInfoItemStyle = OriginalComponent => props => {
  const { style = {}, themed = false } = props;
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: 288 * WIDTH_RATIO,
      flexDirection: "row",
      alignItems: "center",
      ...style,
    },
    title: {
      ...ApplicationStyles.text.h8,
      color: themed === true ? Colors.primaryTitle : Colors.primaryText,
    },
    image: {
      width: 144 * WIDTH_RATIO,
      height: 80 * WIDTH_RATIO,
      borderRadius: 12 * WIDTH_RATIO,
    },
    main: {
      flex: 1,
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
    description: {
      fontFamily: Fonts.type.italicFont,
      fontSize: 13 * WIDTH_RATIO,
      color: themed === true ? Colors.tabInactiveTitle : Colors.primaryGrey,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
