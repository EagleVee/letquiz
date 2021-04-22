import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const TimelineListStyle = (OriginalComponent) => (props) => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const { lineHeight = 20 * WIDTH_RATIO } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {},
    item: {
      flexDirection: "row",
      alignItems: "center",
    },
    checkBoxContainer: {
      paddingHorizontal: 12 * WIDTH_RATIO,
      paddingRight: 12 * WIDTH_RATIO,
      alignItems: "center",
    },
    timelinePlaceholder: {
      height: lineHeight,
    },
    timelineLine: {
      width: 2 * WIDTH_RATIO,
      height: lineHeight,
      backgroundColor: Colors.primaryInactive,
    },
    timelineLineActive: {
      backgroundColor: Colors.primaryRed,
    },
  });

  function getTimelineLineStyle(isDone, otherIsDone) {
    return isDone && otherIsDone
      ? [styles.timelineLine, styles.timelineLineActive]
      : styles.timelineLine;
  }

  return (
    <OriginalComponent
      {...props}
      styles={styles}
      getTimelineLineStyle={getTimelineLineStyle}
    />
  );
};
