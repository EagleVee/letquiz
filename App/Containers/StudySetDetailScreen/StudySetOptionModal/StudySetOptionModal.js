import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { StudySetOptionModalStyle } from "./StudySetOptionModalStyle";
import PropTypes from "prop-types";

function StudySetOptionModal(props) {
  const { styles } = props;
  return (
    <View style={styles.container}>
      <Text>StudySetOptionModal</Text>
    </View>
  );
}

StudySetOptionModal.propTypes = {
  onPress: PropTypes.func.isRequired
};

StudySetOptionModal.defaultProps = {
  onPress: () => {}
};

export default compose(StudySetOptionModalStyle)(StudySetOptionModal)