import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { LineStyle } from "./LineStyle";
import PropTypes from "prop-types";

function Line(props) {
  const { styles } = props;
  return <View style={styles.container} />;
}

Line.propTypes = {
  color: PropTypes.string,
};

Line.defaultProps = {};

export default compose(LineStyle)(Line);
