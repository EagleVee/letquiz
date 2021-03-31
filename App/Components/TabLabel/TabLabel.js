import React from "react";
import { View, Text } from "react-native";
import { TabLabelStyle } from "./TabLabelStyle";
import PropTypes from "prop-types";
import { compose } from "ramda";
import I18n from "Locales";
import ThemeSvg from "Components/ThemeSvg/ThemeSvg";
import { WIDTH_RATIO } from "Themes/Metrics";

function TabLabel(props) {
  const { styles, iconLight, iconDark, iconActive, label, focused } = props;
  return (
    <View style={styles.container}>
      <ThemeSvg
        width={20 * WIDTH_RATIO}
        height={20 * WIDTH_RATIO}
        svg={{
          dark: focused ? iconActive : iconDark,
          light: focused ? iconActive : iconLight,
        }}
      />
      <Text source={label} style={styles.label}>
        {I18n.t(label)}
      </Text>
    </View>
  );
}

TabLabel.propTypes = {
  onPress: PropTypes.func.isRequired,
};

TabLabel.defaultProps = {
  onPress: () => {},
};

export default compose(TabLabelStyle)(TabLabel);
