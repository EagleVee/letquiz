import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { STATUS_BAR_HEIGHT } from "Themes/Metrics";
import { useThemeColors } from "Hooks/useThemeColors";
import { DARK_THEME } from "../../Config/Themes";
import { useSelector } from "react-redux";
import { isAndroid } from "../../Utils/platform";

export const ContainerStyle = OriginalComponent => props => {
  const {
    statusBarContent,
    style = {},
    notSafeArea = false,
    horizontal = false,
  } = props;
  const Colors = useThemeColors();
  const theme = useSelector(state => state.device.theme);
  const statusBarHeight =
    notSafeArea || horizontal === true || isAndroid() ? 0 : STATUS_BAR_HEIGHT;
  const content = statusBarContent
    ? statusBarContent
    : notSafeArea === true || theme === DARK_THEME
    ? "light-content"
    : "dark-content";
  const statusBarColor = props.statusBarColor
    ? props.statusBarColor
    : Colors.background;

  const wrapperStyle = notSafeArea === true ? style : {};

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: statusBarColor,
      paddingTop: statusBarHeight,
      ...wrapperStyle,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      ...style,
    },
  });

  return (
    <OriginalComponent
      {...props}
      styles={styles}
      statusBarContent={content}
      statusBarHeight={statusBarHeight}
      statusBarColor={statusBarColor}
    />
  );
};
