import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { PrimaryGradientBackgroundStyle } from "./PrimaryGradientBackgroundStyle";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { WIDTH_RATIO } from "Themes/Metrics";
import { Colors } from "Themes";

function PrimaryGradientBackground(props) {
  const { styles, children, colors } = props;
  return (
    <LinearGradient
      style={styles.container}
      colors={colors ? colors : Colors.primaryGradient}>
      {children}
    </LinearGradient>
  );
}

PrimaryGradientBackground.propTypes = {
  size: PropTypes.number.isRequired,
};

PrimaryGradientBackground.defaultProps = {
  size: 20 * WIDTH_RATIO,
};

export default compose(PrimaryGradientBackgroundStyle)(
  PrimaryGradientBackground,
);
