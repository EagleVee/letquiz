import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const SearchScreenStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    header: {
      paddingTop: 12 * WIDTH_RATIO,
      backgroundColor: Colors.primary,
    },
    searchBarContainer: {
      marginHorizontal: 16 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      borderRadius: 8 * WIDTH_RATIO,
      paddingHorizontal: 12 * WIDTH_RATIO,
      paddingVertical: 12 * WIDTH_RATIO,
      ...ApplicationStyles.utils.centerRow,
    },
    searchInput: {
      marginLeft: 12 * WIDTH_RATIO,
      ...ApplicationStyles.text.h7,
    },
    tabBar: {
      backgroundColor: "transparent",
    },
    tabLabel: {
      color: Colors.greyItem,
    },
    tabActiveLabel: {
      color: Colors.white,
    },
    tabIndicator: {
      height: 4 * WIDTH_RATIO,
      backgroundColor: Colors.primaryYellow,
    },
    listEmpty: {
      marginTop: 200 * WIDTH_RATIO,
      width: "100%",
      ...ApplicationStyles.utils.middle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
