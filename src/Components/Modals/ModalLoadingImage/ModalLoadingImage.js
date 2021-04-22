import React, { forwardRef, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { ModalLoadingImageStyle } from "./ModalLoadingImageStyle";
import PropTypes from "prop-types";
import AppModal from "Components/Modals/AppModal";
import ThemeSvg from "Components/ThemeSvg/ThemeSvg";
import { WIDTH_RATIO } from "Themes/Metrics";
import ImageLoadingModal from "Assets/Svgs/VectorImages/ImageLoadingModal.svg";
import { useSetState } from "Hooks/useSetState";

function ModalLoadingImage(props, ref) {
  const { styles } = props;
  const [state, setState] = useSetState({
    isVisible: false,
    text: "",
  });

  return (
    <AppModal style={styles.modal} position={"middle"}>
      <View style={styles.container}>
        <ImageLoadingModal width={77 * WIDTH_RATIO} height={80 * WIDTH_RATIO} />
        <Text>ModalLoadingImage</Text>
      </View>
    </AppModal>
  );
}

ModalLoadingImage.propTypes = {
  onPress: PropTypes.func.isRequired,
};

ModalLoadingImage.defaultProps = {
  onPress: () => {},
};

export default forwardRef(ModalLoadingImageStyle(ModalLoadingImage));
