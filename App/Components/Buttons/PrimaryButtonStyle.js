import React from "react";
import { StyleSheet } from "react-native";
import { Colors, Fonts } from "Themes";
import { WIDTH_RATIO } from "Themes/Metrics";

export const PrimaryButtonStyle = (OriginalComponent) => (props) => {
  const { style, isAvailable = true, labelStyle } = props;

  const styles = StyleSheet.create({
    container: {
      // height: 48 * WIDTH_RATIO,
      // borderRadius: 24 * WIDTH_RATIO,
      // alignItems: "center",
      // justifyContent: "center",
      width: "100%",
      shadowColor: "rgba(42, 53, 113, 0.16)",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 10,
      shadowOpacity: 1,
      ...style,
    },
    buttonInner: {
      width: "100%",
      height: 48 * WIDTH_RATIO,
      borderRadius: 24 * WIDTH_RATIO,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 4 * WIDTH_RATIO,
      borderColor: "white",
      shadowColor: "rgba(42, 53, 113, 0.16)",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 10,
      shadowOpacity: 1,
      ...style,
    },
    buttonText: {
      fontFamily: Fonts.type.boldFont,
      fontSize: 15 * WIDTH_RATIO,
      color: isAvailable ? "white" : Colors.textBlack,
      ...labelStyle,
    },
  });

  return (
    <OriginalComponent {...props} styles={styles} isAvailable={isAvailable} />
  );
};
