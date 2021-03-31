import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { OpacityBackButtonStyle } from "./OpacityBackButtonStyle";
import PropTypes from "prop-types";
import IconArrowBackWhite from "../../Assets/Svgs/SharedIcons/IconArrowBackWhite.svg";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { useNavigationMethods } from "../../Hooks/useNavigationMethods";

function OpacityBackButton(props) {
  const NavigationMethods = useNavigationMethods();
  const { styles, onPress = NavigationMethods.goBack } = props;
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <IconArrowBackWhite width={21 * WIDTH_RATIO} height={21 * WIDTH_RATIO} />
    </TouchableOpacity>
  );
}

OpacityBackButton.propTypes = {
  onPress: PropTypes.func,
};

OpacityBackButton.defaultProps = {};

export default compose(OpacityBackButtonStyle)(OpacityBackButton);
