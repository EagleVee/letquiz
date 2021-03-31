import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { InstructionStepStyle } from "./InstructionStepStyle";
import PropTypes from "prop-types";
import FastImage from "Components/RNComponents/FastImage";
import I18n from "Locales";
import BlockDivider from "Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "Themes/Metrics";

function InstructionStep(props) {
  const { styles, item, index } = props;
  const { icon, textI18n } = item;
  return (
    <View style={styles.container}>
      <View style={styles.imageBackground}>
        <FastImage source={icon} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.main}>
        <BlockDivider height={2 * WIDTH_RATIO} />
        <Text style={styles.description}>{I18n.t(textI18n)}</Text>
      </View>
    </View>
  );
}

InstructionStep.propTypes = {
  onPress: PropTypes.func.isRequired,
};

InstructionStep.defaultProps = {
  onPress: () => {},
};

export default compose(InstructionStepStyle)(InstructionStep);
