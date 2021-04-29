import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

import I18n from "Locales/I18n";
import styles from "./TextButtonStyle";

function TextButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{I18n.t(title)}</Text>
    </TouchableOpacity>
  );
}

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

TextButton.defaultProps = {
  title: "",
  onPress: () => {},
};

export default TextButton;
