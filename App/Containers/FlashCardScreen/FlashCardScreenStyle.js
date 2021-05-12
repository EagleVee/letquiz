import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const FlashCardScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    progressBarContainer: {
      paddingHorizontal: 16 * WIDTH_RATIO,
      paddingVertical: 20 * WIDTH_RATIO,
    },
    progressTrack: {
      backgroundColor: Colors.primaryGrey,
      width: "100%",
      height: 2 * WIDTH_RATIO,
    },
    progressThumb: {
      position: "absolute",
      right: -4 * WIDTH_RATIO,
      top: -3 * WIDTH_RATIO,
      width: 8 * WIDTH_RATIO,
      height: 8 * WIDTH_RATIO,
      borderRadius: 4 * WIDTH_RATIO,
      backgroundColor: Colors.primaryNeon,
    },
    flipItem: {
      width: deviceWidth - 40 * WIDTH_RATIO,
      height: ((deviceWidth - 40 * WIDTH_RATIO) * 16) / 9,
      borderRadius: 8 * WIDTH_RATIO,
    },
    cardStack: {
      alignItems: "center",
    },
    headerTitle: {
      textAlign: "center",
    },
    empty: {
      width: deviceWidth - 40 * WIDTH_RATIO,
      height: deviceWidth - 40 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      paddingHorizontal: 16 * WIDTH_RATIO,
      borderRadius: 8 * WIDTH_RATIO,
      ...ApplicationStyles.themedShadow,
    },
    emptyMain: {
      flex: 1,
      ...ApplicationStyles.utils.middle,
    },
    emptyFooter: {
      paddingBottom: 16 * WIDTH_RATIO,
    },
    footer: {
      paddingBottom: 28 * WIDTH_RATIO,
    },
    unlearnedContainer: {
      width: 30 * WIDTH_RATIO,
      height: 30 * WIDTH_RATIO,
      borderTopRightRadius: 4 * WIDTH_RATIO,
      borderBottomRightRadius: 4 * WIDTH_RATIO,
      backgroundColor: Colors.primaryYellow,
      ...ApplicationStyles.utils.middle,
    },
    learnedContainer: {
      width: 30 * WIDTH_RATIO,
      height: 30 * WIDTH_RATIO,
      borderTopLeftRadius: 4 * WIDTH_RATIO,
      borderBottomLeftRadius: 4 * WIDTH_RATIO,
      backgroundColor: Colors.primaryButton,
      ...ApplicationStyles.utils.middle,
    },
    unlearnedNumber: {
      ...ApplicationStyles.text.h9Bold,
      color: Colors.black,
    },
    numberContainer: {
      width: "100%",
      ...ApplicationStyles.utils.centerRow,
    },
    learnedNumber: {
      ...ApplicationStyles.text.h9Bold,
      color: Colors.white,
    },
    footerButtonContainer: {
      ...ApplicationStyles.utils.centerRow,
      justifyContent: "center",
    },
    footerButton: {
      width: 56 * WIDTH_RATIO,
      height: 56 * WIDTH_RATIO,
      borderRadius: 28 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      ...ApplicationStyles.utils.middle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
