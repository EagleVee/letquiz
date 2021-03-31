import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { IconWhiteButtonStyle } from "./IconWhiteButtonStyle";
import PropTypes from "prop-types";
import FastImage from "../RNComponents/FastImage";
import { WIDTH_RATIO } from "Themes/Metrics";

function IconWhiteButton(props) {
  const { styles, onPress, IconComponent, iconSource } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {IconComponent ? (
        <IconComponent width={48 * WIDTH_RATIO} height={48 * WIDTH_RATIO} />
      ) : (
        <FastImage
          source={iconSource}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
}

IconWhiteButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconSource: PropTypes.any,
  IconComponent: PropTypes.any,
};

IconWhiteButton.defaultProps = {
  onPress: () => {},
};

export default compose(IconWhiteButtonStyle)(IconWhiteButton);
