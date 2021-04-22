import { View } from "react-native";
import React, { useMemo } from "react";

export default function ListDivider({
  width = 0,
  height = 0,
  backgroundColor = "transparent",
}) {
  return useMemo(
    () => (
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
      />
    ),
    [width, height, backgroundColor],
  );
}
