import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalActions from "../Redux/Actions/ModalActions";

export const WithModalRedux = OriginalComponent => props => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  function setCreateActionModalVisible(visible) {
    dispatch(ModalActions.setCreateActionModalVisible(visible));
  }
  return (
    <OriginalComponent
      {...props}
      modal={modal}
      setCreateActionModalVisible={setCreateActionModalVisible}
    />
  );
};
