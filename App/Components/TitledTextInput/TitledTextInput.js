import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { TitledTextInputStyle } from "./TitledTextInputStyle";
import PropTypes from "prop-types";
import PrimaryGradientBackground from "../Backgrounds/PrimaryGradientBackground";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import ThemeSvg from "../ThemeSvg/ThemeSvg";
import { useThemeSvgs } from "Hooks/useThemeSvgs";
import { DARK_THEME, LIGHT_THEME } from "../../Config/Themes";

function TitledTextInput(props) {
  const {
    styles,
    value,
    onChangeText,
    title,
    showButton,
    onButtonPress,
    error,
    textStyle,
    titleBackgroundColor,
    ...textInputProps
  } = props;

  const Svgs = useThemeSvgs();
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        {title.length > 0 && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.textInput}
          {...textInputProps}
        />
        {showButton ? (
          <TouchableOpacity style={styles.button} onPress={onButtonPress}>
            <PrimaryGradientBackground size={44 * WIDTH_RATIO}>
              <Svgs.Pointer.ArrowRightWhite
                width={21 * WIDTH_RATIO}
                height={12 * WIDTH_RATIO}
              />
            </PrimaryGradientBackground>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonPlaceholder} />
        )}
      </View>
      {error.length > 0 && (
        <View style={styles.errorContainer}>
          <Svgs.Error.TriangleFill
            width={13 * WIDTH_RATIO}
            height={12 * WIDTH_RATIO}
          />
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </View>
  );
}

TitledTextInput.propTypes = {
  title: PropTypes.string,
  titleBackgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TitledTextInput.defaultProps = {
  title: "",
  onButtonPress: () => {},
  error: "",
};

export default compose(TitledTextInputStyle)(TitledTextInput);
