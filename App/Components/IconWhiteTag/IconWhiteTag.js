import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { IconWhiteTagStyle } from "./IconWhiteTagStyle";
import PropTypes from "prop-types";
import FastImage from "../RNComponents/FastImage";
import { WIDTH_RATIO } from "Themes/Metrics";

function IconWhiteTag(props) {
  const { styles, iconSource, title, IconComponent } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {IconComponent ? (
          <IconComponent width={32 * WIDTH_RATIO} height={32 * WIDTH_RATIO} />
        ) : (
          <FastImage
            source={iconSource}
            style={styles.icon}
            resizeMode="contain"
          />
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

IconWhiteTag.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconSource: PropTypes.any,
  IconComponent: PropTypes.any,
  title: PropTypes.string,
};

IconWhiteTag.defaultProps = {
  onPress: () => {},
  iconSource: null,
  title: "",
};

export default compose(IconWhiteTagStyle)(IconWhiteTag);
