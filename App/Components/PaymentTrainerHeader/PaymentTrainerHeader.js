import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { PaymentTrainerHeaderStyle } from "./PaymentTrainerHeaderStyle";
import PropTypes from "prop-types";
import TrainerTransform from '../../Transforms/TrainerTransform';
import FastImage from '../RNComponents/FastImage';
import I18n from '../../Locales';

function PaymentTrainerHeader(props) {
  const { styles, trainer  = new TrainerTransform() } = props;
  const { display_name, avatarSource } = trainer;

  return (
    <View style={styles.header}>
      <FastImage source={avatarSource} style={styles.avatar} />
      <View style={styles.trainerInfo}>
        <Text style={styles.h8}>
          {I18n.t("PaymentCheckoutScreen.WorkOutWith")}
        </Text>
        <Text style={styles.h8Bold}>{display_name}</Text>
      </View>
    </View>
  );
}

PaymentTrainerHeader.propTypes = {
  onPress: PropTypes.func.isRequired
};

PaymentTrainerHeader.defaultProps = {
  onPress: () => {}
};

export default compose(PaymentTrainerHeaderStyle)(PaymentTrainerHeader)
