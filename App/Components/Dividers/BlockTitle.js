import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { BlockTitleStyle } from "./BlockTitleStyle";
import PropTypes from "prop-types";

function BlockTitle(props) {
  const { styles, title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

BlockTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

BlockTitle.defaultProps = {
  title: "",
};

export default compose(BlockTitleStyle)(BlockTitle);
