import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { STATUS_BAR_HEIGHT, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const ProfileScreenHeaderStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      backgroundColor: Colors.cardBackground,
      paddingHorizontal: 16 * WIDTH_RATIO,
      borderBottomLeftRadius: 24 * WIDTH_RATIO,
      borderBottomRightRadius: 24 * WIDTH_RATIO,
    },
    infoContainer: {
      paddingTop: 12 * WIDTH_RATIO + STATUS_BAR_HEIGHT,
      flexDirection: "row",
      alignItems: "center",
    },
    nameContainer: {
      flex: 1,
      paddingHorizontal: 12 * WIDTH_RATIO,
    },
    settingButton: {
      width: 48 * WIDTH_RATIO,
      height: 48 * WIDTH_RATIO,
      backgroundColor: Colors.background,
      borderRadius: 12 * WIDTH_RATIO,
      borderWidth: WIDTH_RATIO,
      borderColor: Colors.switchInactive,
      ...ApplicationStyles.utils.middle,
    },
    email: {
      ...ApplicationStyles.text.h8,
      color: "#2b86f1",
    },
    avatar: {
      width: 80 * WIDTH_RATIO,
      height: 80 * WIDTH_RATIO,
      borderWidth: 4 * WIDTH_RATIO,
      borderRadius: 40 * WIDTH_RATIO,
      borderColor: Colors.portraitBorder,
    },
    codeContainer: {
      paddingTop: 20 * WIDTH_RATIO,
      paddingBottom: 13 * WIDTH_RATIO,
    },
    unauthenticatedContainer: {
      paddingTop: 60 * WIDTH_RATIO + STATUS_BAR_HEIGHT,
    },
    socialButtonContainer: {
      paddingTop: 40 * WIDTH_RATIO,
      paddingBottom: 10 * WIDTH_RATIO,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
