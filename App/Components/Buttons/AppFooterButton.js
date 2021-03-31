import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { AppFooterButtonStyle } from "./AppFooterButtonStyle";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";

function AppFooterButton(props) {
  const { styles, colors } = props;
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

AppFooterButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

AppFooterButton.defaultProps = {
  onPress: () => {},
};

export default compose(AppFooterButtonStyle)(AppFooterButton);
