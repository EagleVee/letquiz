import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { StudySetNavigatorStyle } from "./StudySetNavigatorStyle";
import PropTypes from "prop-types";
import { useThemeColors } from "Hooks/useThemeColors";
import { WIDTH_RATIO } from "Themes/Metrics";
import BlockDivider from "Components/Dividers/BlockDivider";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "Components/RNComponents/RNVectorIcons";
import { useNavigationMethods } from "../../../Hooks/useNavigationMethods";

function StudySetNavigator(props) {
  const { styles, cards } = props;
  const Colors = useThemeColors();
  const NavigationMethods = useNavigationMethods();

  function onFlashCardPress() {
    NavigationMethods.goToScreen("FlashCardScreen", { cards: cards });
  }

  function onLearnPress() {}
  return (
    <View style={styles.container}>
      <View style={styles.centerRow}>
        <TouchableOpacity style={styles.button} onPress={onLearnPress}>
          <FontAwesome
            name={"book"}
            color={Colors.primaryNeon}
            size={24 * WIDTH_RATIO}
          />
          <Text style={styles.buttonText}>LEARN</Text>
        </TouchableOpacity>
        <BlockDivider width={8 * WIDTH_RATIO} />
        <TouchableOpacity style={styles.button} onPress={onFlashCardPress}>
          <AntDesign
            name={"switcher"}
            color={Colors.primaryNeon}
            size={24 * WIDTH_RATIO}
          />
          <Text style={styles.buttonText}>FLASHCARDS</Text>
        </TouchableOpacity>
      </View>
      <BlockDivider height={8 * WIDTH_RATIO} />
      <View style={styles.centerRow}>
        <TouchableOpacity style={styles.button} onPress={onLearnPress}>
          <FontAwesome5
            name={"columns"}
            color={Colors.primaryNeon}
            size={24 * WIDTH_RATIO}
          />
          <Text style={styles.buttonText}>MATCH</Text>
        </TouchableOpacity>
        <BlockDivider width={8 * WIDTH_RATIO} />
        <TouchableOpacity style={styles.button} onPress={onLearnPress}>
          <AntDesign
            name={"filetext1"}
            color={Colors.primaryNeon}
            size={24 * WIDTH_RATIO}
          />
          <Text style={styles.buttonText}>TEST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

StudySetNavigator.propTypes = {
  onPress: PropTypes.func.isRequired,
};

StudySetNavigator.defaultProps = {
  onPress: () => {},
};

export default compose(StudySetNavigatorStyle)(StudySetNavigator);
