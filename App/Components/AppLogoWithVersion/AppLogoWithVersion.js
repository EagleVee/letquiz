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
      <AppLogoGradient width={108 * WIDTH_RATIO} height={80 * WIDTH_RATIO} />
      <Text style={styles.name}>QUIZLET</Text>
      <Text style={styles.version}>
        {I18n.t("RegularTerm.Version") + " " + APP_VERSION_NAME}
      </Text>
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
