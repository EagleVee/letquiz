import React from "react";
import { StyleSheet } from "react-native";
import { Fonts } from "Themes";
import { WIDTH_RATIO } from "Themes/Metrics";
import { TabIcon, TabLabel } from "Fixtures/TabBar";
import { useThemeColors } from "Hooks/useThemeColors";

export const TabLabelStyle = OriginalComponent => props => {
  const Colors = useThemeColors();
  const { focused, name } = props;
  const Icon = TabIcon[name];
  const label = TabLabel[name];

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
    <OriginalComponent {...props} styles={styles} Icon={Icon} label={label} />
  );
};
