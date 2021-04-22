import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { BorderInverseStyle } from "./BorderInverseStyle";
import PropTypes from "prop-types";
import { WIDTH_RATIO } from "Themes/Metrics";

function BorderInverse(props) {
  const { styles } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner} />
    </View>
  );
}

BorderInverse.propTypes = {
  position: PropTypes.oneOf([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight",
  ]),
  borderRadius: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
};

BorderInverse.defaultProps = {
  position: "bottomLeft",
  borderRadius: 16 * WIDTH_RATIO,
  size: 16 * WIDTH_RATIO,
  color: "white",
};

export default compose(BorderInverseStyle)(BorderInverse);
