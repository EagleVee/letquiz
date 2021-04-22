import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { ProgressBarStyle } from "./ProgressBarStyle";
import PropTypes from "prop-types";

function ProgressBar(props) {
  const { styles, showPercentage, progress } = props;
  return (
    <View style={styles.container}>
      {showPercentage && <Text style={styles.percentage}>{progress} %</Text>}
      <View style={styles.progressContainer}>
        <View style={styles.progress} />
      </View>
    </View>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  showPercentage: PropTypes.bool,
};

ProgressBar.defaultProps = {
  progress: 0,
  showPercentage: true,
};

export default compose(ProgressBarStyle)(ProgressBar);
