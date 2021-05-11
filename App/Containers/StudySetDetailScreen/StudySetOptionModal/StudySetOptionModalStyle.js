import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from 'Themes/Metrics';
import { useThemeStyles } from 'Hooks/useThemeStyles';
import { useThemeColors } from 'Hooks/useThemeColors';

export const StudySetOptionModalStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
  });

  return (
    <OriginalComponent
      {...props}
      styles={styles}
    />
  );
}