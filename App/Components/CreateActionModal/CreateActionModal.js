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

function CreateActionModal(props: ModalProps) {
  const {
    styles,
    isVisible,
    onVisibleChange = () => {},
    ...otherProps
  } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const [visible, setVisible] = useState(props.isVisible);

  useEffect(() => {
    setVisible(props.isVisible);
  }, [props.isVisible]);

  useEffect(() => {
    onVisibleChange(visible);
  }, [visible]);

  function onCreateStudySet() {
    setVisible(false);
    NavigationMethods.goToScreen("StudySetDetailScreen");
  }

  return (
    <AppModal position={"bottom"} {...otherProps} isVisible={visible}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onCreateStudySet}
          style={styles.actionButton}>
          <Ionicons
            name={"ios-duplicate-outline"}
            size={24 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
          <Text style={styles.actionButtonText}>Create study set</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCreateStudySet}
          style={styles.actionButton}>
          <Feather
            name={"folder"}
            size={24 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
          <Text style={styles.actionButtonText}>Create folder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCreateStudySet}
          style={styles.actionButton}>
          <Feather
            name={"star"}
            size={24 * WIDTH_RATIO}
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

export default compose(CreateActionModalStyle)(CreateActionModal);
