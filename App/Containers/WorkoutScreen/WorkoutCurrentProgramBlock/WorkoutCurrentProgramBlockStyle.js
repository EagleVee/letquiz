import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useThemeStyles } from "../../../Hooks/useThemeStyles";
import { useThemeColors } from "../../../Hooks/useThemeColors";

export const WorkoutCurrentProgramBlockStyle = (OriginalComponent) => (
  props,
) => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {},
  });

  return <OriginalComponent {...props} styles={styles} />;
};
