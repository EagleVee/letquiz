import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal, { ModalProps } from "react-native-modal";
import { AppModalStyle } from "./AppModalStyle";
import { compose } from "ramda";

interface Props extends ModalProps {
  children: any;
  styles: any;
  position: string;
}

function AppModal(props: Props) {
  const { children, styles, position, style, ...otherProps } = props;

  return (
    <Modal style={styles.container} {...otherProps}>
      {children}
    </Modal>
  );
}

AppModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func,
  position: PropTypes.oneOf(["top", "middle", "bottom"]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

AppModal.defaultProps = {
  isVisible: false,
  onModalClose: () => {},
  style: {},
};

export default compose(AppModalStyle)(AppModal);
