import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";
import { compose } from "ramda";
import { SimpleTabBarStyle } from "./SimpleTabBarStyle";
import PropTypes from "prop-types";
import { RNFlatList } from "../RNComponents";
import * as Animatable from "react-native-animatable";
import Statusbar from "../Statusbar/Statusbar";
import { useThemeColors } from "Hooks/useThemeColors";
import { isAndroid } from "../../Utils/platform";
import { STATUS_BAR_HEIGHT } from "../../Themes/Metrics";
import { PropTypesValue } from "../../Utils/type";

function SimpleTabBar(props) {
  const {
    navigationIndex,
    onTabChange,
    tabLabels,
    styles,
    onLayout,
    duration,
  } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const tabLength = tabLabels.length;

  const Colors = useThemeColors();

  function onTabPress(index) {
    setTabIndex(index);
    onTabChange(index);
  }

  function renderTabItem({ item, index }) {
    const isActive = index === tabIndex;
    const tabStyle = isActive ? styles.tabActive : styles.tab;
    const tabLabelStyle = isActive ? styles.labelActive : styles.label;

    return (
      <TouchableOpacity style={tabStyle} onPress={onTabPress.bind(this, index)}>
        <Text style={tabLabelStyle}>{item}</Text>
        {isActive ? (
          <View style={styles.indicatorActive} />
        ) : (
          <View style={styles.indicatorInactive} />
        )}
      </TouchableOpacity>
    );
  }

  useEffect(() => {
    if (navigationIndex < tabLength && navigationIndex !== tabIndex) {
      onTabPress(navigationIndex);
    }
  }, [navigationIndex]);

  return (
    <Animatable.View
      transition="backgroundColor"
      duration={duration}
      onLayout={onLayout}
      style={styles.container}>
      <RNFlatList
        data={tabLabels}
        contentContainerStyle={styles.tabContent}
        renderItem={renderTabItem}
        horizontal
        dividerWidth={0}
      />
    </Animatable.View>
  );
}

SimpleTabBar.propTypes = {
  onTabChange: PropTypes.func,
  tabLabels: PropTypes.array.isRequired,
  indicatorStyle: PropTypesValue.style,
  tabBarStyle: PropTypesValue.style,
  activeTabStyle: PropTypesValue.style,
  tabStyle: PropTypesValue.style,
  labelActiveStyle: PropTypesValue.style,
  labelStyle: PropTypesValue.style,
  tabBarHeight: PropTypes.number,
  initialIndex: PropTypes.number,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  isStickyTabBar: PropTypes.bool,
  notSafeArea: PropTypes.bool,
  activeBackgroundColor: PropTypes.string,
  inactiveBackgroundColor: PropTypes.string,
  onLayout: PropTypes.func,
};

SimpleTabBar.defaultProps = {
  tabLabels: [],
  onPress: () => {},
  onTabChange: () => {},
  tabBarStyle: {},
  initialIndex: 0,
  scrollEnabled: true,
  activeTabStyle: {},
  tabStyle: {},
  labelStyle: {},
  labelActiveStyle: {},
  indicatorStyle: {},
  isActive: false,
  isStickyTabBar: false,
  notSafeArea: false,
  duration: 300,
  onLayout: () => {},
};

export default compose(SimpleTabBarStyle)(SimpleTabBar);
