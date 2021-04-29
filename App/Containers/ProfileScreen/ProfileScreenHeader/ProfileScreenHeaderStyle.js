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
      paddingBottom: 20 * WIDTH_RATIO,
    },
    infoContainer: {
      paddingTop: 12 * WIDTH_RATIO + STATUS_BAR_HEIGHT,
      alignItems: "center",
    },
    nameContainer: {
      paddingTop: 16 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
      alignItems: "center",
    },
    email: {
      ...ApplicationStyles.text.h8,
    },
    avatar: {
      width: 160 * WIDTH_RATIO,
      height: 160 * WIDTH_RATIO,
      borderWidth: 4 * WIDTH_RATIO,
      borderRadius: 80 * WIDTH_RATIO,
      borderColor: Colors.portraitBorder,
    },
    unauthenticatedContainer: {
      paddingTop: 20 * WIDTH_RATIO,
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
