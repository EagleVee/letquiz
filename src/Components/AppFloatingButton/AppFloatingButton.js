import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { AppFloatingButtonStyle } from "./AppFloatingButtonStyle";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";

function AppFloatingButton(props) {
  const { styles, onPress, title, colors } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <LinearGradient colors={colors} style={styles.buttonInner}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

AppFloatingButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  floating: PropTypes.bool,
  outline: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

AppFloatingButton.defaultProps = {
  onPress: () => {},
  isActive: true,
  floating: true,
  background: true,
  outline: false,
  title: "",
};

export default compose(AppFloatingButtonStyle)(AppFloatingButton);
