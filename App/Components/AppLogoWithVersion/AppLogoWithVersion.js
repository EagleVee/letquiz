import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { AppLogoWithVersionStyle } from "./AppLogoWithVersionStyle";
import PropTypes from "prop-types";
import AppLogoGradient from "Assets/Svgs/VectorImages/AppLogoGradient.svg";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { APP_VERSION_NAME } from "../../Config/MetaData";
import I18n from "../../Locales";

function AppLogoWithVersion(props) {
  const { styles } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Quizlet</Text>
    </View>
  );
}

AppLogoWithVersion.propTypes = {
  onPress: PropTypes.func.isRequired,
};

AppLogoWithVersion.defaultProps = {
  onPress: () => {},
};

export default compose(AppLogoWithVersionStyle)(AppLogoWithVersion);
