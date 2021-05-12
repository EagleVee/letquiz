import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ModalTypes } from "Redux/Actions/ModalActions";

export const INITIAL_STATE = Immutable({
  createActionModalVisible: false,
});

export const setCreateActionModalVisible = (state, action) => {
  return state.merge({
    createActionModalVisible: action.visible,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [ModalTypes.SET_CREATE_ACTION_MODAL_VISIBLE]: setCreateActionModalVisible,
});
