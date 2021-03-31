import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { getValueFromSelector } from "Utils/type";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const ProgramCardItemStyle = OriginalComponent => props => {
  const { size = "normal", containerStyle, inverseColor = false } = props;
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const backgroundColor = inverseColor
    ? Colors.inverseCardBackground
    : Colors.cardBackground;
  const normalStyles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      borderRadius: 12 * WIDTH_RATIO,
      width: 300 * WIDTH_RATIO,
      backgroundColor: backgroundColor,
      ...containerStyle,
    },
    thumbnail: {
      width: 300 * WIDTH_RATIO,
      height: 168 * WIDTH_RATIO,
      borderTopLeftRadius: 12 * WIDTH_RATIO,
      borderTopRightRadius: 12 * WIDTH_RATIO,
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
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 5 * WIDTH_RATIO,
      paddingBottom: 12 * WIDTH_RATIO,
    },
    title: {
      flex: 1,
      ...ApplicationStyles.text.h7,
      height: 52 * WIDTH_RATIO,
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
      color: Colors.inputTitle,
    },
    progressBar: {
      position: "absolute",
      bottom: 4 * WIDTH_RATIO,
      left: 0,
      alignSelf: "center",
      paddingHorizontal: 12 * WIDTH_RATIO,
    },
  });

  const largeStyles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      borderRadius: 16 * WIDTH_RATIO,
      width: 382 * WIDTH_RATIO,
      backgroundColor: backgroundColor,
      ...containerStyle,
    },
    thumbnail: {
      width: 382 * WIDTH_RATIO,
      height: 214 * WIDTH_RATIO,
      borderTopLeftRadius: 16 * WIDTH_RATIO,
      borderTopRightRadius: 16 * WIDTH_RATIO,
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
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 5 * WIDTH_RATIO,
      paddingBottom: 12 * WIDTH_RATIO,
    },
    title: {
      flex: 1,
      ...ApplicationStyles.text.h7,
      height: 52 * WIDTH_RATIO,
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
    progressBar: {
      position: "absolute",
      bottom: 4 * WIDTH_RATIO,
      left: 0,
      alignSelf: "center",
      paddingHorizontal: 12 * WIDTH_RATIO,
    },
  });

  const styleSelector = {
    normal: normalStyles,
    large: largeStyles,
    default: normalStyles,
  };

  const styles = getValueFromSelector(size, styleSelector);

  return <OriginalComponent {...props} styles={styles} />;
};
