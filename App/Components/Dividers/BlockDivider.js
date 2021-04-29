import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { WIDTH_RATIO } from "Themes/Metrics";

function BlockDivider({
  height,
  width = 0,
  small,
  backgroundColor = "transparent",
}) {
  return (
    <View
      style={{
        height: height ? height : small ? 16 * WIDTH_RATIO : 35 * WIDTH_RATIO,
        width: width,
        backgroundColor: backgroundColor,
      }}
    />
  );
}

BlockDivider.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  small: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

BlockDivider.defaultProps = {};

export default BlockDivider;
