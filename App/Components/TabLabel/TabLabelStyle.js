import React from "react";
import { StyleSheet } from "react-native";
import { Fonts } from "Themes";
import { WIDTH_RATIO } from "Themes/Metrics";
import { TabLabel } from "Fixtures/TabBar";
import { useThemeColors } from "Hooks/useThemeColors";
import { useThemeSvgs } from "Hooks/useThemeSvgs";

export const TabLabelStyle = OriginalComponent => props => {
  const Svgs = useThemeSvgs();
  const { focused, name } = props;
  const iconLight = Svgs.Tab[name];
  const iconDark = Svgs.Tab[name];
  const iconActive = Svgs.TabActive[name];
  const label = TabLabel[name];
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      width: 20 * WIDTH_RATIO,
      height: 20 * WIDTH_RATIO,
    },
    label: {
      marginTop: 2,
      fontFamily: Fonts.type.primaryFont,
      color: focused ? Colors.primaryRed : Colors.tabInactiveTitle,
      fontSize: 12 * WIDTH_RATIO,
    },
  });

  return (
    <OriginalComponent
      {...props}
      styles={styles}
      iconLight={iconLight}
      iconDark={iconDark}
      iconActive={iconActive}
      label={label}
    />
  );
};
