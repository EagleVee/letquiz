import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { TrainerCardItemStyle } from "./TrainerCardItemStyle";
import PropTypes from "prop-types";
import FastImage from "../RNComponents/FastImage";

function TrainerCardItem(props) {
  const { styles, item, onPress } = props;
  const { description, avatarSource } = item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress.bind(this, item)}>
      <View style={styles.innerBackground}>
        <View style={styles.innerFront}>
          <FastImage source={avatarSource} style={styles.avatar} />
          <Text style={styles.introduction} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

TrainerCardItem.propTypes = {
  onPress: PropTypes.func.isRequired,
};

TrainerCardItem.defaultProps = {
  onPress: () => {},
};

export default compose(TrainerCardItemStyle)(TrainerCardItem);
