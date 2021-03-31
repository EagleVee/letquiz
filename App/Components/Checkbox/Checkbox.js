import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { CheckboxStyle } from "./CheckboxStyle";
import PropTypes from "prop-types";
import PrimaryGradientBackground from "../Backgrounds/PrimaryGradientBackground";
import { WIDTH_RATIO } from "Themes/Metrics";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function Checkbox(props) {
  const { styles, check, size } = props;
  return check ? (
    <View style={styles.container}>
      <PrimaryGradientBackground size={size - 4 * WIDTH_RATIO}>
        <FontAwesome5
          name={"check"}
          size={size / 2 - WIDTH_RATIO}
          color={"white"}
        />
      </PrimaryGradientBackground>
    </View>
  ) : (
    <View style={styles.unchecked} />
  );
}

Checkbox.propTypes = {
  onPress: PropTypes.func,
  outline: PropTypes.bool,
  size: PropTypes.number,
  check: PropTypes.bool,
};

Checkbox.defaultProps = {
  onPress: () => {},
  outline: false,
  size: 24 * WIDTH_RATIO,
  check: PropTypes.bool,
};

export default compose(CheckboxStyle)(Checkbox);
