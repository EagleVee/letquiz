import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { compose } from "ramda";
import { FlipCardLargeItemStyle } from "./FlipCardLargeItemStyle";
import PropTypes from "prop-types";
import CardFlip, { FlipCardProps } from "react-native-card-flip";
import CardTransform from "Transforms/CardTransform";

function FlipCardLargeItem(props: FlipCardProps) {
  const { styles, card = new CardTransform(), ...cardFlipProps } = props;
  const flipRef = useRef();
  const { term, definition } = card;

  function onFlip() {
    flipRef.current.flip();
  }

  function getTextStyle(text) {
    if (text.length > 100) {
      return styles.h7;
    } else if (text.length > 50) {
      return styles.h6;
    }

    return styles.h5;
  }

  return (
    <CardFlip
      style={styles.container}
      ref={flipRef}
      flipDirection={"y"}
      {...cardFlipProps}>
      <TouchableWithoutFeedback onPress={onFlip}>
        <View style={styles.card}>
          <Text style={getTextStyle(term)} numberOfLines={8}>
            {term}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={onFlip}>
        <View style={styles.card}>
          <Text style={getTextStyle(definition)} numberOfLines={8}>
            {definition}
          </Text>
        </View>
      </TouchableOpacity>
    </CardFlip>
  );
}

FlipCardLargeItem.propTypes = {
  onPress: PropTypes.func.isRequired,
};

FlipCardLargeItem.defaultProps = {
  onPress: () => {},
};

export default compose(FlipCardLargeItemStyle)(FlipCardLargeItem);
