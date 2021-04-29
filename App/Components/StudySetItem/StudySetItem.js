import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { StudySetItemStyle } from "./StudySetItemStyle";
import PropTypes from "prop-types";
import StudySetTransform from "../../Transforms/StudySetTransform";
import BlockDivider from "../Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import FastImage from "../RNComponents/FastImage";
import { Images } from "Themes";

function StudySetItem(props) {
  const { styles, studySet = new StudySetTransform(), index, onPress } = props;
  const { title, cards, createdBy } = studySet;
  const { username } = createdBy;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress.bind(this, studySet, index)}>
      <View style={styles.centerRow}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <BlockDivider height={4 * WIDTH_RATIO} />
      <Text style={styles.description}>{cards.length} items</Text>
      <View style={styles.footer}>
        <FastImage source={Images.placeholder} style={styles.avatar} />
        <Text style={styles.h9Bold}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
}

StudySetItem.propTypes = {
  onPress: PropTypes.func.isRequired,
};

StudySetItem.defaultProps = {
  onPress: () => {},
};

export default compose(StudySetItemStyle)(StudySetItem);
