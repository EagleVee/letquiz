import React, { useCallback, useMemo, useRef } from "react";
import AppFailedModal from "Components/Modals/AppFailedModal";
import AppSuccessModal from "Components/Modals/AppSuccessModal";
import AppOptionModal from "Components/Modals/AppOptionModal";
import type { OptionModalProps } from "Components/Modals/AppOptionModal";
import { AppPromptModalStyle } from "../Components/Modals/AppPromptModalStyle";

export const AppModalContext = React.createContext();

function Provider({ children, styles }) {
  const failedModalRef = useRef();
  const successModalRef = useRef();
  const optionModalRef = useRef();

  const showFailedModal = useCallback((content, okCallback, backHandler) => {
    failedModalRef.current.open(content, okCallback, backHandler);
  }, []);

  const showAPIFailedModal = useCallback(
    (response, okCallback, backHandler) => {
      const displayMessage =
        response && response.message
          ? response.message
          : "Đã có lỗi xảy ra, vui lòng thử lại!";
      failedModalRef.current.open(displayMessage, okCallback, backHandler);
    },
    [],
  );

  const showSuccessModal = useCallback((content, okCallback, backHandler) => {
    successModalRef.current.open(content, okCallback, backHandler);
  }, []);

  const showOptionModal = useCallback((props: OptionModalProps) => {
    optionModalRef.current.open(props);
  }, []);

  const value = useMemo(() => {
    return {
      showFailedModal,
      showAPIFailedModal,
      showSuccessModal,
      showOptionModal,
    };
  }, [showFailedModal, showAPIFailedModal, showSuccessModal, showOptionModal]);

  return (
    <AppModalContext.Provider value={value}>
      {children}
      {/*<AppFailedModal styles={styles} ref={failedModalRef} />*/}
      {/*<AppSuccessModal styles={styles} ref={successModalRef} />*/}
      <AppOptionModal styles={styles} ref={optionModalRef} />
    </AppModalContext.Provider>
  );
}

export default AppPromptModalStyle(Provider);
