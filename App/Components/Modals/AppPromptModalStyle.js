import React from "react";
import { StyleSheet } from "react-native";
import { Fonts } from "Themes";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeColors } from "../../Hooks/useThemeColors";
import { useThemeStyles } from "../../Hooks/useThemeStyles";

export const AppPromptModalStyle = OriginalComponent => props => {
  const Colors = useThemeColors();
  const ApplicationStyles = useThemeStyles();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      marginHorizontal: 60 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      alignItems: "center",
      borderRadius: 8 * WIDTH_RATIO,
    },
    titleContainer: {
      width: "100%",
      paddingVertical: 8 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
      alignItems: "center",
      borderBottomWidth: WIDTH_RATIO,
      borderColor: Colors.primaryTitle,
    },
    contentContainer: {
      marginVertical: 16 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
      width: "100%",
      alignItems: "center",
    },
    content: {
      ...ApplicationStyles.text.h8,
      textAlign: "center",
    },
    footer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.background,
      borderBottomLeftRadius: 8 * WIDTH_RATIO,
      borderBottomRightRadius: 8 * WIDTH_RATIO,
    },
    okText: {
      ...ApplicationStyles.text.h8Bold,
      color: Colors.error,
    },
    singleButton: {
      flex: 1,
    },
    footerDivider: {
      width: 0.5 * WIDTH_RATIO,
      backgroundColor: Colors.portraitBorder,
      height: 30 * WIDTH_RATIO,
    },
    dualButton: {
      flex: 1,
      paddingVertical: 12 * WIDTH_RATIO,
      alignItems: "center",
    },
  });

  return <OriginalComponent styles={styles} {...props} />;
};
