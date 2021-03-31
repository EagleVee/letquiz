import React from "react";
import { StyleSheet } from "react-native";
import { getValueFromSelector } from "../../Utils/type";

const addedStyle = {
  top: {
    justifyContent: "flex-start",
  },
  middle: {
    justifyContent: "center",
  },
  bottom: {
    justifyContent: "flex-end",
  },
  default: {},
};

export const AppModalStyle = OriginalComponent => props => {
  const { style, position, ...otherProps } = props;

  const addStyle = getValueFromSelector(position, addedStyle);

  const containerStyle = Array.isArray(style)
    ? style.reduce((v, e) => {
        return { ...v, ...e };
      }, {})
    : style;
  const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      ...addStyle,
      ...containerStyle,
    },
  });

  return <OriginalComponent {...otherProps} styles={styles} />;
};
