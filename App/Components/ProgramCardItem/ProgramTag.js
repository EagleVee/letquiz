import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { ProgramTagStyle } from "./ProgramTagStyle";
import PropTypes from "prop-types";
import { WIDTH_RATIO } from "Themes/Metrics";
import FastImage from "../RNComponents/FastImage";
import { useThemeColors } from "Hooks/useThemeColors";
import { DARK_THEME, LIGHT_THEME } from "../../Config/Themes";

function ProgramTag(props) {
  const {
    styles,
    text,
    IconComponent,
    iconName = "",
    iconSource,
    size = 17 * WIDTH_RATIO,
  } = props;
  const Colors = useThemeColors();

  return (
    <View style={styles.container}>
      {iconSource ? (
        <FastImage
          source={iconSource}
          style={styles.icon}
          resizeMode="contain"
        />
      ) : IconComponent ? (
        <IconComponent name={iconName} width={size} height={size} />
      ) : null}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

ProgramTag.propTypes = {
  IconComponent: PropTypes.any,
  iconSource: PropTypes.any,
  iconName: PropTypes.string,
  size: PropTypes.number,
  text: PropTypes.string.isRequired,
};

ProgramTag.defaultProps = {};

export default compose(ProgramTagStyle)(ProgramTag);
