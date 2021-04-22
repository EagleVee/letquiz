import React, { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  children: any;
}

function RNTouchableOpacity(props: Props) {
  const { children } = props;
  return (
    <TouchableOpacity delayPressIn={150} {...props}>
      {children}
    </TouchableOpacity>
  );
}

export default RNTouchableOpacity;
