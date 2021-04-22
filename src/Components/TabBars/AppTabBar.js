import React, { useState, useEffect, useRef, createRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { deviceWidth } from "Themes/Metrics";
import { compose } from "ramda";
import { AppTabBarStyle } from "./AppTabBarStyle";
import PropTypes from "prop-types";
import { RNFlatList } from "../RNComponents";

function AppTabBar(props) {
  const {
    children,
    navigationIndex,
    onTabChange,
    scrollEnabled,
    childrenLength,
    styles,
  } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const sceneRef = useRef();
  const listData = children.length ? children : [children];

  function onTabPress(index) {
    setTimeout(() => {
      setTabIndex(index);
      onTabChange(index);
      sceneRef.current.scrollToIndex({ animated: true, index: index });
    }, 100);
  }

  function renderTabItem({ item, index }) {
    const isActive = index === tabIndex;
    const tabStyle = isActive ? styles.tabActive : styles.tab;
    const tabLabelStyle = isActive ? styles.labelActive : styles.label;

    return (
      <TouchableOpacity style={tabStyle} onPress={onTabPress.bind(this, index)}>
        <Text style={tabLabelStyle}>
          {item?.props?.title ? item.props.title : ""}
        </Text>
        {isActive && <View style={styles.indicatorActive} />}
      </TouchableOpacity>
    );
  }

  function renderTabs() {
    return (
      <RNFlatList
        data={listData}
        contentContainerStyle={styles.tabContent}
        renderItem={renderTabItem}
        horizontal
        dividerWidth={0}
      />
    );
  }

  function renderSceneItem({ item, index }) {
    return item;
  }

  function onScrollEnd({ nativeEvent }) {
    const { contentOffset } = nativeEvent;
    const index = Math.floor(contentOffset.x / deviceWidth);
    setTabIndex(index);
  }

  function renderScene() {
    return (
      <RNFlatList
        data={listData}
        renderItem={renderSceneItem}
        horizontal
        initialScrollIndex={0}
        initialNumToRender={childrenLength}
        ref={sceneRef}
        dividerWidth={0}
        dividerHeight={0}
        pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
      />
    );
  }

  useEffect(() => {
    if (navigationIndex < childrenLength && navigationIndex !== tabIndex) {
      onTabPress(navigationIndex);
    }
  }, [navigationIndex]);

  return (
    <View>
      {renderTabs()}
      {renderScene()}
    </View>
  );
}

AppTabBar.propTypes = {
  onTabChange: PropTypes.func,
  indicatorStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  tabBarStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  activeTabStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  tabStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  labelActiveStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  tabBarHeight: PropTypes.number,
  initialIndex: PropTypes.number,
  index: PropTypes.number,
  scrollEnabled: PropTypes.bool,
};

AppTabBar.defaultProps = {
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
};

export default compose(AppTabBarStyle)(AppTabBar);
