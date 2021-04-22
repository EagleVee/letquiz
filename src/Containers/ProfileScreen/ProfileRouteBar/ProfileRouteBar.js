import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { ProfileRouteBarStyle } from "./ProfileRouteBarStyle";
import PropTypes from "prop-types";
import ThemeSvg from "../../../Components/ThemeSvg/ThemeSvg";
import { useThemeSvgs } from "../../../Hooks/useThemeSvgs";
import { WIDTH_RATIO } from "../../../Themes/Metrics";
import { useNavigationMethods } from "../../../Hooks/useNavigationMethods";
import RNSwitch from "../../../Components/RNComponents/RNSwitch";
import { getValueFromSelector } from "../../../Utils/type";

function ProfileRouteBar(props) {
  const {
    styles,
    title,
    type,
    switchValue,
    onSwitchChange,
    onPress,
    Icon,
    iconFill,
    isVisible,
  } = props;

  const Svgs = useThemeSvgs();

  function renderSwitch() {
    return <RNSwitch value={switchValue} onValueChange={onSwitchChange} />;
  }

  function renderArrow() {
    return (
      <Svgs.Pointer.ChevronRightGray
        width={8 * WIDTH_RATIO}
        height={14 * WIDTH_RATIO}
      />
    );
  }

  function renderSelector() {}

  const renderRight = {
    switch: renderSwitch,
    arrow: renderArrow,
    selector: renderSelector,
    none: () => <View />,
    default: () => <View />,
  };

  return isVisible ? (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={type === "switch"}>
      <View style={styles.iconBackground}>
        <Icon
          width={20 * WIDTH_RATIO}
          height={20 * WIDTH_RATIO}
          fill={iconFill}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      {getValueFromSelector(type, renderRight)()}
    </TouchableOpacity>
  ) : (
    <View />
  );
}

ProfileRouteBar.propTypes = {
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["switch", "route", "none", "default"]).isRequired,
  isVisible: PropTypes.bool,
  switchValue: PropTypes.bool,
  onSwitchChange: PropTypes.func,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  selectorValue: PropTypes.string,
  Icon: PropTypes.any,
  iconFill: PropTypes.string,
};

ProfileRouteBar.defaultProps = {
  onPress: () => {},
  type: "default",
  switchValue: false,
  isVisible: true,
  onSwitchChange: () => {},
  Icon: View,
  iconFill: null,
};

export default compose(ProfileRouteBarStyle)(ProfileRouteBar);
