import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";
import { Fonts } from "../../Themes";

export const TitledTextInputStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const {
    textStyle = {},
    titleBackgroundColor = Colors.cardBackground,
    borderColor = Colors.border,
  } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    textInputContainer: {
      borderRadius: 16 * WIDTH_RATIO,
      borderWidth: WIDTH_RATIO,
      borderColor: borderColor,
      paddingVertical: 8 * WIDTH_RATIO,
      paddingRight: 8 * WIDTH_RATIO,
      paddingLeft: 16 * WIDTH_RATIO,
      flexDirection: "row",
      alignItems: "center",
    },
    textInput: {
      ...ApplicationStyles.text.h5Bold,
      flex: 1,
      ...textStyle,
    },
    button: {
      marginLeft: 8 * WIDTH_RATIO,
      width: 52 * WIDTH_RATIO,
      height: 52 * WIDTH_RATIO,
      borderRadius: 26 * WIDTH_RATIO,
      backgroundColor: Colors.buttonBackground,
      ...ApplicationStyles.utils.middle,
      ...ApplicationStyles.themedShadow,
    },
    buttonPlaceholder: {
      height: 44 * WIDTH_RATIO,
    },
    titleContainer: {
      position: "absolute",
      backgroundColor: titleBackgroundColor,
      left: 12 * WIDTH_RATIO,
      top: -10 * WIDTH_RATIO,
      paddingHorizontal: 4 * WIDTH_RATIO,
    },
    title: {
      fontFamily: Fonts.type.italicFont,
      fontSize: 13 * WIDTH_RATIO,
      color: Colors.inputTitle,
    },
    errorContainer: {
      paddingHorizontal: 15 * WIDTH_RATIO,
      paddingTop: 9 * WIDTH_RATIO,
      flexDirection: "row",
      alignItems: "center",
    },
    error: {
      ...ApplicationStyles.text.h9,
      color: Colors.error,
      marginLeft: 7 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
