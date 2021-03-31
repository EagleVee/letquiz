import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const TrainerLargeCardItemStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: 382 * WIDTH_RATIO,
      borderRadius: 16 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
    },
    imageBackground: {
      width: 382 * WIDTH_RATIO,
      height: 382 * WIDTH_RATIO,
      borderTopLeftRadius: 16 * WIDTH_RATIO,
      borderTopRightRadius: 16 * WIDTH_RATIO,
      alignItems: "flex-end",
      justifyContent: "flex-end",
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
    image: {
      width: 382 * WIDTH_RATIO,
      height: 382 * WIDTH_RATIO,
      borderTopLeftRadius: 16 * WIDTH_RATIO,
      borderTopRightRadius: 16 * WIDTH_RATIO,
    },
    playButtonContainer: {
      borderTopLeftRadius: 20 * WIDTH_RATIO,
      borderTopRightRadius: 20 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
    },
    playContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    playBackground: {
      width: 40 * WIDTH_RATIO,
      height: 35 * WIDTH_RATIO,
      borderRadius: 20 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    iconPlay: {
      width: 12 * WIDTH_RATIO,
      height: 12 * WIDTH_RATIO,
    },
    main: {
      flex: 1,
      paddingHorizontal: 12 * WIDTH_RATIO,
      paddingTop: 10 * WIDTH_RATIO,
      paddingBottom: 16 * WIDTH_RATIO,
    },
    description: {
      ...ApplicationStyles.text.description,
      height: 48 * WIDTH_RATIO,
    },
    tagContainer: {
      flexDirection: "row",
      paddingTop: 4 * WIDTH_RATIO,
      height: 28 * WIDTH_RATIO,
    },
    thumbnailTouchable: {
      width: "100%",
      height: "100%",
      ...ApplicationStyles.utils.middle,
    },
    controlButton: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      width: 68 * WIDTH_RATIO,
      height: 68 * WIDTH_RATIO,
      borderRadius: (68 * WIDTH_RATIO) / 2,
      alignItems: "center",
      justifyContent: "center",
    },
    controlIcon: {
      width: 24 * WIDTH_RATIO,
      height: 22 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
