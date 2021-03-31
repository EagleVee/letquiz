import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Fonts } from "Themes";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const WorkoutCalendarStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      paddingTop: 13 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
      ...ApplicationStyles.utils.middle,
    },
    list: {
      paddingTop: 12 * WIDTH_RATIO,
      width: "100%",
    },
    inactiveDayText: {
      ...ApplicationStyles.text.h8Bold,
      color: Colors.inactiveText,
      lineHeight: 17 * WIDTH_RATIO,
    },
    activeDayText: {
      ...ApplicationStyles.text.h8Bold,
      color: Colors.activeText,
      lineHeight: 17 * WIDTH_RATIO,
    },
    calendarItem: {
      width: 44 * WIDTH_RATIO,
      height: 44 * WIDTH_RATIO,
      borderRadius: 12 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      paddingTop: 3 * WIDTH_RATIO,
      alignItems: "center",
      // justifyContent: "center",
    },
    calendarItemActive: {
      width: 42 * WIDTH_RATIO,
      height: 42 * WIDTH_RATIO,
      borderWidth: WIDTH_RATIO,
      borderColor: Colors.calendarBorder,
      borderRadius: 12 * WIDTH_RATIO,
      backgroundColor: Colors.white,
      paddingTop: 2 * WIDTH_RATIO,
      alignItems: "center",
      // justifyContent: "center",
    },
    calendarTitle: {
      ...ApplicationStyles.text.h9,
      color: Colors.primaryInactive,
    },
    calendarTitleActive: {
      ...ApplicationStyles.text.h9,
      color: Colors.primaryRed,
    },
    dayOffButton: {
      marginTop: 14 * WIDTH_RATIO,
      height: 48 * WIDTH_RATIO,
      width: "100%",
      borderRadius: 12 * WIDTH_RATIO,
      backgroundColor: Colors.dayOff.button,
      ...ApplicationStyles.utils.middle,
    },
    dayOffText: {
      ...ApplicationStyles.text.h8Bold,
      color: Colors.dayOff.text,
    },
  });

  function calendarItemStyle(isActive) {
    return isActive ? styles.calendarItemActive : styles.calendarItem;
  }
  function calendarTitleStyle(isActive) {
    return isActive ? styles.calendarTitleActive : styles.calendarTitle;
  }
  function calendarDayTextStyle(isActive) {
    return isActive ? styles.activeDayText : styles.inactiveDayText;
  }

  return (
    <OriginalComponent
      {...props}
      styles={styles}
      calendarItemStyle={calendarItemStyle}
      calendarTitleStyle={calendarTitleStyle}
      calendarDayTextStyle={calendarDayTextStyle}
    />
  );
};
