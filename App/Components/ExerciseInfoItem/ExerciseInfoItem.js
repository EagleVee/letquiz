import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { ExerciseInfoItemStyle } from "./ExerciseInfoItemStyle";
import PropTypes from "prop-types";
import FastImage from "../RNComponents/FastImage";
import images from "Themes/Images";
import I18n from "Locales";
import ExerciseTransform from "Transforms/ExerciseTransform";

function ExerciseInfoItem(props) {
  const { styles, item = new ExerciseTransform() } = props;
  const { exercise_title, exercise_duration, exercise_unit, rest_time } = item;
  return (
    <View style={styles.container}>
      <FastImage source={images.placeholderDark} style={styles.image} />
      <View style={styles.main}>
        <Text style={styles.title} numberOfLines={2}>
          {exercise_title}
        </Text>
        <Text style={styles.description}>
          {exercise_duration} {I18n.t("Unit." + exercise_unit)}
        </Text>
        <Text style={styles.description}>
          {I18n.t("Util.Rest")} {rest_time} {I18n.t("Unit.seconds")}
        </Text>
      </View>
    </View>
  );
}

ExerciseInfoItem.propTypes = {
  onPress: PropTypes.func.isRequired,
};

ExerciseInfoItem.defaultProps = {
  onPress: () => {},
};

export default compose(ExerciseInfoItemStyle)(ExerciseInfoItem);
