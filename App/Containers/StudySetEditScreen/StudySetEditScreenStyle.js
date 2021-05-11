import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const StudySetEditScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    headerRight: {},
    card: {
      paddingBottom: 12 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      ...ApplicationStyles.utils.themedShadow,
    },
    doneButton: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingTop: 16 * WIDTH_RATIO,
      paddingBottom: 20 * WIDTH_RATIO,
    },
    deleteButton: {
      paddingHorizontal: 12 * WIDTH_RATIO,
      paddingTop: 12 * WIDTH_RATIO,
    },
    deleteButtonContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    cardMain: {
      paddingHorizontal: 12 * WIDTH_RATIO,
    },
    divider: {
      height: 12 * WIDTH_RATIO,
    },
    header: {
      paddingTop: 12 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
      backgroundColor: Colors.headerBackground,
      paddingBottom: 160 * WIDTH_RATIO,
      marginBottom: -110 * WIDTH_RATIO,
    },
    addButton: {
      marginTop: 16 * WIDTH_RATIO,
      marginBottom: 28 * WIDTH_RATIO,
      height: 120 * WIDTH_RATIO,
      // width: deviceWidth - 32 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      ...ApplicationStyles.utils.themedShadow,
      ...ApplicationStyles.utils.middle,
    },
    plusCircle: {
      width: 52 * WIDTH_RATIO,
      height: 52 * WIDTH_RATIO,
      borderRadius: 26 * WIDTH_RATIO,
      backgroundColor: Colors.primaryNeon,
      ...ApplicationStyles.utils.middle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
