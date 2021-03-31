import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const ExerciseVideoStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    fullscreenContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: deviceHeight,
      height: deviceWidth,
      zIndex: 9999,
      backgroundColor: "black",
    },
    container: {
      backgroundColor: "black",
      width: deviceWidth,
      height: (deviceWidth * 9) / 16,
    },
    fullscreenVideo: {
      width: deviceHeight,
      height: deviceWidth,
    },
    video: {
      width: deviceWidth,
      height: (deviceWidth * 9) / 16,
    },
    overlay: {
      zIndex: 9,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: Colors.blackOpacity,
    },
    timerContainer: {
      position: "absolute",
      left: 44 * WIDTH_RATIO,
      top: 16 * WIDTH_RATIO,
      width: 120 * WIDTH_RATIO,
      height: 120 * WIDTH_RATIO,
      borderRadius: 32 * WIDTH_RATIO,
      backgroundColor: Colors.blackOpacity,
      ...ApplicationStyles.utils.middle,
    },
    expandButton: {
      zIndex: 99,
      position: "absolute",
      right: 16 * WIDTH_RATIO,
      bottom: 8 * WIDTH_RATIO,
      width: 48 * WIDTH_RATIO,
      height: 48 * WIDTH_RATIO,
      borderRadius: 24 * WIDTH_RATIO,
      backgroundColor: Colors.blackOpacity,
      ...ApplicationStyles.utils.middle,
    },
    shrinkButton: {
      zIndex: 99,
      position: "absolute",
      right: 28 * WIDTH_RATIO * WIDTH_RATIO,
      top: 16 * WIDTH_RATIO,
      width: 48 * WIDTH_RATIO,
      height: 48 * WIDTH_RATIO,
      borderRadius: 24 * WIDTH_RATIO,
      backgroundColor: Colors.blackOpacity,
      ...ApplicationStyles.utils.middle,
    },
    finishedContainer: {
      zIndex: 99,
      position: "absolute",
      right: 28 * WIDTH_RATIO * WIDTH_RATIO,
      bottom: 16 * WIDTH_RATIO,
      borderWidth: 4 * WIDTH_RATIO,
      borderColor: "white",
      ...ApplicationStyles.utils.middle,
    },
    iconExpand: {
      width: 24 * WIDTH_RATIO,
      height: 24 * WIDTH_RATIO,
    },
    normalVideo: {
      width: deviceWidth,
    },
    controlIcon: {
      width: 24 * WIDTH_RATIO,
      height: 24 * WIDTH_RATIO,
    },
    controlIconLarge: {
      width: 24 * WIDTH_RATIO * 1.2,
      height: 24 * WIDTH_RATIO * 1.2,
    },
    controlButton: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      width: 24 * 2.5 * WIDTH_RATIO,
      height: 24 * 2.5 * WIDTH_RATIO,
      borderRadius: (24 * 2.5 * WIDTH_RATIO) / 2,
      alignItems: "center",
      justifyContent: "center",
    },
    overlayMid: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    thumbnail: {
      zIndex: 999,
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    thumbnailTouchable: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    errorContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.primaryText,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
