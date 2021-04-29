import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { compose } from "ramda";
import { BackHeaderBarStyle } from "./BackHeaderBarStyle";
import PropTypes from "prop-types";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { useThemeSvgs } from "Hooks/useThemeSvgs";
import { useThemeColors } from "../../Hooks/useThemeColors";

function BackHeaderBar(props) {
  const { styles, onPress, title, renderRight } = props;
  const NavigationMethods = useNavigationMethods();
  const Svgs = useThemeSvgs();
  const Colors = useThemeColors();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress ? onPress : NavigationMethods.goBack}
        style={styles.backButton}>
        <Svgs.Pointer.ArrowBack
          fill={Colors.primaryButton}
          width={21 * WIDTH_RATIO}
          height={21 * WIDTH_RATIO}
        />
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      {renderRight ? renderRight() : <View style={styles.placeholder} />}
    </View>
  );
}

BackHeaderBar.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  renderRight: PropTypes.func,
};

BackHeaderBar.defaultProps = {
  title: "",
};

export default compose(BackHeaderBarStyle)(BackHeaderBar);
