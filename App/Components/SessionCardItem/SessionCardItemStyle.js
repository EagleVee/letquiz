import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const SessionCardItemStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      borderRadius: 12 * WIDTH_RATIO,
      width: 300 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
    },
    iconTimeContainer: {
      width: 48 * WIDTH_RATIO,
      height: 48 * WIDTH_RATIO,
      borderRadius: 24 * WIDTH_RATIO,
      backgroundColor: Colors.lightBackground,
      alignItems: "center",
      justifyContent: "center",
    },
    lockContainer: {
      position: "absolute",
      right: 8 * WIDTH_RATIO,
      top: 8 * WIDTH_RATIO,
      width: 48 * WIDTH_RATIO,
      height: 48 * WIDTH_RATIO,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: 24 * WIDTH_RATIO,
      alignItems: "center",
      justifyContent: "center",
    },
    main: {
      width: "100%",
      paddingTop: 10 * WIDTH_RATIO,
      paddingHorizontal: 12 * WIDTH_RATIO,
    },
    tagContainer: {
      paddingTop: 5 * WIDTH_RATIO,
      paddingBottom: 12 * WIDTH_RATIO,
      height: 5 + 12 + 24 * WIDTH_RATIO,
    },
    duration: {
      ...ApplicationStyles.text.h7,
      flex: 1,
      marginLeft: 12 * WIDTH_RATIO,
    },
    title: {
      ...ApplicationStyles.text.h7,
      flex: 1,
      marginTop: 6,
      height: 52 * WIDTH_RATIO,
    },
    programTitle: {
      ...ApplicationStyles.text.h9,
      flex: 1,
      color: Colors.error,
      marginBottom: 8,
    },
    footer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8 * WIDTH_RATIO,
    },
    trainerAvatar: {
      width: 32 * WIDTH_RATIO,
      height: 32 * WIDTH_RATIO,
      borderRadius: 16 * WIDTH_RATIO,
    },
    trainerTitle: {
      marginLeft: 8 * WIDTH_RATIO,
      flex: 1,
      ...ApplicationStyles.text.h8,
      color: Colors.primaryGrey,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
