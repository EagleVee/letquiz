import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { LoginInputStyle } from "./LoginInputStyle";
import PropTypes from "prop-types";
import { TextInputProps } from "react-native";
import BlockDivider from "../Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useThemeColors } from "../../Hooks/useThemeColors";

function LoginInput(props: TextInputProps) {
  const {
    styles,
    inputKey,
    title,
    onChangeText,
    secureTextEntry = false,
  } = props;
  const Colors = useThemeColors();
  const [showSecureText, setShowSecureText] = useState(
    secureTextEntry === true,
  );

  function onTextChange(text) {
    onChangeText(inputKey, text);
  }

  function onEyePress() {
    setShowSecureText(!showSecureText);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.input}
          secureTextEntry={!showSecureText}
          onTextChange={onTextChange}
        />
        {secureTextEntry === true && (
          <TouchableOpacity style={styles.eyeButton} onPress={onEyePress}>
            <AntDesign
              size={20 * WIDTH_RATIO}
              name={"eyeo"}
              color={
                showSecureText ? Colors.primaryButton : Colors.primaryTitle
              }
            />
          </TouchableOpacity>
        )}
      </View>
      <BlockDivider height={12 * WIDTH_RATIO} />
      <Text style={styles.h8}>{title}</Text>
    </View>
  );
}

LoginInput.propTypes = {
  title: PropTypes.string,
};

LoginInput.defaultProps = {
  title: "",
};

export default compose(LoginInputStyle)(LoginInput);