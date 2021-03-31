import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PrimaryButtonStyle } from "./PrimaryButtonStyle";
import { PropTypesValue } from "Utils/type";
import PrimaryGradientBackground from "../Backgrounds/PrimaryGradientBackground";

function PrimaryButton(props) {
  const { onPress, title, isAvailable, styles } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={!isAvailable}>
      <PrimaryGradientBackground style={styles.buttonInner}>
        <Text style={styles.buttonText}>{title}</Text>
      </PrimaryGradientBackground>
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
