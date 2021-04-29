import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import { ContainerStyle } from "./ContainerStyle";
import { PropTypesValue } from "Utils/type";

function Container(props) {
  const {
    styles,
    behavior,
    statusBarColor,
    notSafeArea,
    statusBarContent,
  } = props;

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={styles.wrapper}
      keyboardVerticalOffset={0}>
      <StatusBar barStyle={statusBarContent} backgroundColor={statusBarColor} />
      {notSafeArea ? (
        <View style={styles.container}>{props.children}</View>
      ) : (
        <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
      )}
    </KeyboardAvoidingView>
  );
}

Container.propTypes = {
  translucent: PropTypesValue.bool,
  behavior: PropTypesValue.any,
  statusBarColor: PropTypesValue.string,
  statusBarContent: PropTypesValue.oneOf([
    "light-content",
    "dark-content",
    "default",
  ]),
  style: PropTypesValue.style,
  notSafeArea: PropTypesValue.bool,
  isPadding: PropTypesValue.bool,
  paddingStyle: PropTypesValue.style,
};

Container.defaultProps = {
  behavior: Platform.select({
    android: "height",
    ios: "padding",
  }),
  style: {},
  notSafeArea: false,
  isPadding: false,
  paddingStyle: {},
};

export default ContainerStyle(Container);
