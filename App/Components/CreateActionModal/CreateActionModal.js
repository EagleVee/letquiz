import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { CreateActionModalStyle } from "./CreateActionModalStyle";
import PropTypes from "prop-types";
import AppModal from "../Modals/AppModal";
import { useNavigationMethods } from "../../Hooks/useNavigationMethods";
import { ModalProps } from "react-native-modal";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { useThemeColors } from "../../Hooks/useThemeColors";
import { Feather, Ionicons } from "../RNComponents/RNVectorIcons";
import { WithModalRedux } from "../../Business/WithModalRedux";

function CreateActionModal(props: ModalProps) {
  const {
    styles,
    isVisible,
    setCreateActionModalVisible,
    ...otherProps
  } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();

  function closeActionModal() {
    setCreateActionModalVisible(false);
  }

  function onCreateStudySet() {
    closeActionModal();
    NavigationMethods.goToScreen("StudySetEditScreen");
  }

  return (
    <AppModal
      position={"bottom"}
      isVisible={isVisible}
      onBackdropPress={closeActionModal}
      onBackButtonPress={closeActionModal}
      {...otherProps}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onCreateStudySet}
          style={styles.actionButton}>
          <Ionicons
            name={"ios-duplicate-outline"}
            size={20 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
          <Text style={styles.actionButtonText}>Create study set</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCreateStudySet}
          style={styles.actionButton}>
          <Feather
            name={"folder"}
            size={20 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
          <Text style={styles.actionButtonText}>Create folder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCreateStudySet}
          style={styles.actionButton}>
          <Feather
            name={"star"}
            size={20 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
          <Text style={styles.actionButtonText}>Create class</Text>
        </TouchableOpacity>
      </View>
    </AppModal>
  );
}

CreateActionModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

CreateActionModal.defaultProps = {
  isVisible: false,
};

export default compose(
  CreateActionModalStyle,
  WithModalRedux,
)(CreateActionModal);
