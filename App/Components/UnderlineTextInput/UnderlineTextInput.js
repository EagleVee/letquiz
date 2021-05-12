import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { compose } from "ramda";
import { UnderlineTextInputStyle } from "./UnderlineTextInputStyle";
import PropTypes from "prop-types";
import BlockDivider from "../Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useThemeColors } from "../../Hooks/useThemeColors";

function UnderlineTextInput(props: TextInputProps) {
  const {
    styles,
    onFocus = () => {},
    onBlur = () => {},
    title = "",
    secureTextEntry = false,
    ...rest
  } = props;
  const Colors = useThemeColors();
  const [focused, setFocused] = useState(false);
  const [secureText, setSecureText] = useState(secureTextEntry === true);

  function onEyePress() {
    setSecureText(!secureText);
  }

  function onInputFocus(event) {
    setFocused(true);
    onFocus(event);
  }
  function onInputBlur(event) {
    setFocused(false);
    onBlur(event);
  }

  return (
    <View>
      <View style={focused ? styles.focusedContainer : styles.container}>
        <View style={styles.centerRow}>
          <TextInput
            style={styles.input}
            {...rest}
            placeholderTextColor={Colors.inputTitle}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            secureTextEntry={secureText}
          />
          {secureTextEntry === true && (
            <TouchableOpacity style={styles.eyeButton} onPress={onEyePress}>
              <AntDesign
                size={20 * WIDTH_RATIO}
                name={"eyeo"}
                color={secureText ? Colors.primaryButton : Colors.primaryTitle}
              />
            </TouchableOpacity>
          )}
        </View>
        {!focused && <BlockDivider height={WIDTH_RATIO} />}
      </View>
      {title.length > 0 && <Text style={styles.inputDescription}>{title}</Text>}
    </View>
  );
}

UnderlineTextInput.propTypes = {
  onPress: PropTypes.func.isRequired,
};

UnderlineTextInput.defaultProps = {
  onPress: () => {},
};

export default compose(UnderlineTextInputStyle)(UnderlineTextInput);
