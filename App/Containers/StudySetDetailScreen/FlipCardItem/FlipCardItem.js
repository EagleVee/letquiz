import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { FlipCardItemStyle } from "./FlipCardItemStyle";
import PropTypes from "prop-types";
import CardFlip from "react-native-card-flip";
import CardTransform from "../../../Transforms/CardTransform";

function FlipCardItem(props) {
  const { styles, card = new CardTransform() } = props;
  const flipRef = useRef();
  const { term, definition } = card;

  function onFlip() {
    flipRef.current.flip();
  }

  function getTextStyle(text) {
    if (text.length > 100) {
      return styles.h8;
    } else if (text.length > 50) {
      return styles.h7;
    }

    return styles.h6;
  }

  return (
    <CardFlip style={styles.container} ref={flipRef} flipDirection={"x"}>
      <TouchableOpacity style={styles.card} onPress={onFlip}>
        <Text style={getTextStyle(term)} numberOfLines={8}>
          {term}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={onFlip}>
        <Text style={getTextStyle(definition)} numberOfLines={8}>
          {definition}
        </Text>
      </TouchableOpacity>
    </CardFlip>
  );
}

FlipCardItem.propTypes = {
  onPress: PropTypes.func.isRequired,
};

FlipCardItem.defaultProps = {
  onPress: () => {},
};

export default compose(FlipCardItemStyle)(FlipCardItem);
