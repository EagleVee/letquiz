import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { PrimaryButtonStyle } from "./PrimaryButtonStyle";
import { PropTypesValue } from "Utils/type";
import { TouchableOpacityProps } from "react-native";

function PrimaryButton(props: TouchableOpacityProps) {
  const { onPress, title, isAvailable, styles, style, ...otherProps } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      {...otherProps}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

PrimaryButton.propTypes = {
  style: PropTypesValue.style,
  labelStyle: PropTypesValue.style,
  onPress: PropTypesValue.func.isRequired,
  title: PropTypesValue.string.isRequired,
  isAvailable: PropTypesValue.bool,
};

PrimaryButton.defaultProps = {
  onPress: () => {},
  title: "",
  style: {},
  labelStyle: {},
  isAvailable: true,
};

export default PrimaryButtonStyle(PrimaryButton);
