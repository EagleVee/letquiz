import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const ProfileRouteBarStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const { style = {}, titleColor } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12 * WIDTH_RATIO,
      paddingVertical: 12 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      borderRadius: 12 * WIDTH_RATIO,
      ...style,
    },
    title: {
      ...ApplicationStyles.text.h8,
      color: titleColor ? titleColor : Colors.primaryTitle,
      flex: 1,
      marginHorizontal: 12 * WIDTH_RATIO,
    },
    iconBackground: {
      width: 36 * WIDTH_RATIO,
      height: 36 * WIDTH_RATIO,
      borderRadius: 18 * WIDTH_RATIO,
      backgroundColor: Colors.background,
      ...ApplicationStyles.utils.middle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
