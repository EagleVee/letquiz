import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";
import { Fonts } from "../../../Themes";

export const StudySetNavigatorStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingTop: 20 * WIDTH_RATIO,
    },
    button: {
      flex: 1,
      ...ApplicationStyles.utils.middle,
      backgroundColor: Colors.cardBackground,
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 14 * WIDTH_RATIO,
      borderBottomWidth: 2 * WIDTH_RATIO,
      borderBottomColor: Colors.greyPrimary,
    },
    buttonText: {
      marginTop: 8 * WIDTH_RATIO,
      fontFamily: Fonts.type.titleBoldFont,
      fontSize: 15 * WIDTH_RATIO,
      color: Colors.primaryNeon,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
