import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { getValueFromSelector } from "Utils/type";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";

export const BorderInverseStyle = (OriginalComponent) => (props) => {
  const {
    position = "bottomLeft",
    borderRadius = 16 * WIDTH_RATIO,
    color = "white",
  } = props;
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const innerSize = Math.sqrt(2 * borderRadius * borderRadius);
  const borderWidth = innerSize - borderRadius;

  const absolutePositions = {
    bottomLeft: {
      right: -(borderRadius + borderWidth),
      top: -(borderRadius + borderWidth),
    },
    bottomRight: {
      left: -(borderRadius + borderWidth),
      top: -(borderRadius + borderWidth),
    },
    topLeft: {
      right: -(borderRadius + borderWidth),
      bottom: -(borderRadius + borderWidth),
    },
    topRight: {
      left: -(borderRadius + borderWidth),
      bottom: -(borderRadius + borderWidth),
    },
    default: {
      left: -(borderRadius + borderWidth),
      top: -(borderRadius + borderWidth),
    },
  };

  const absolutePosition = getValueFromSelector(position, absolutePositions);

  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      width: borderRadius,
      height: borderRadius,
      overflow: "hidden",
    },
    inner: {
      position: "absolute",
      right: -(borderRadius + borderWidth),
      top: -(borderRadius + borderWidth),
      width: innerSize * 2,
      height: innerSize * 2,
      borderRadius: innerSize,
      borderWidth: borderWidth,
      borderColor: color,
      ...absolutePosition,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
