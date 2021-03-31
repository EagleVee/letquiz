import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { ExerciseDetailInfoStyle } from "./ExerciseDetailInfoStyle";
import PropTypes from "prop-types";

function ExerciseDetailInfo(props) {
  const { styles } = props;
  return (
    <View style={styles.container}>
      <Text>ExerciseDetailInfo</Text>
    </View>
  );
}

ExerciseDetailInfo.propTypes = {
  onPress: PropTypes.func.isRequired
};

ExerciseDetailInfo.defaultProps = {
  onPress: () => {}
};

export default compose(ExerciseDetailInfoStyle)(ExerciseDetailInfo)