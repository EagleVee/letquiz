import React from "react";
import { View, Text } from "react-native";
import { TabLabelStyle } from "./TabLabelStyle";
import PropTypes from "prop-types";
import { compose } from "ramda";
import { useThemeColors } from "../../Hooks/useThemeColors";

function TabLabel(props) {
  const { styles, Icon, focused } = props;
  const Colors = useThemeColors();
  return (
    <View style={styles.container}>
      <Icon color={focused ? Colors.tabIconActive : Colors.tabIconInactive} />
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
