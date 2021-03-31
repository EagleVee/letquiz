import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { LogOutModalStyle } from "./LogOutModalStyle";
import PropTypes from "prop-types";
import AppModal from "../../../Components/Modals/AppModal";

function LogOutModal(props) {
  const { styles, isVisible, onModalClose } = props;
  return (
    <AppModal
      style={styles.container}
      position="middle"
      isVisible={isVisible}
      onBackButtonPress={onModalClose}>
      <Text>LogOutModal</Text>
    </AppModal>
  );
}

LogOutModal.propTypes = {
  onPress: PropTypes.func.isRequired,
};

LogOutModal.defaultProps = {
  onPress: () => {},
};

export default compose(LogOutModalStyle)(LogOutModal);
