import React, { useState } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { compose } from "ramda";
import { UnderlineTextInputStyle } from "./UnderlineTextInputStyle";
import PropTypes from "prop-types";
import BlockDivider from "../Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";

function UnderlineTextInput(props: TextInputProps) {
  const {
    styles,
    onFocus = () => {},
    onBlur = () => {},
    title = "",
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);

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
        <TextInput
          style={styles.input}
          multiline
          {...rest}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
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
