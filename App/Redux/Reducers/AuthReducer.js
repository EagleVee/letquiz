import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { AuthTypes } from "Redux/Actions/AuthActions";

export const INITIAL_STATE = Immutable({
  phone: "",
  isAuthenticated: false,
  errorMessage: "",
});

export const refreshTokenSuccess = (state, action) => {
  return state.merge({
    isAuthenticated: true,
  });
};

export const logoutTokenSuccess = (state, action) => {
  return state.merge({
    isAuthenticated: false,
    user: {},
  });
};

export const setAuthenticated = (state, action) => {
  return state.merge({
    isAuthenticated: action.isAuthenticated,
  });
};

export const setErrorMessage = (state, action) => {
  return state.merge({
    errorMessage: action.message,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.REFRESH_TOKEN_SUCCESS]: refreshTokenSuccess,
  [AuthTypes.LOGOUT_TOKEN_SUCCESS]: logoutTokenSuccess,
  [AuthTypes.SET_AUTHENTICATED]: setAuthenticated,
});
