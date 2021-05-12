import { takeLatest } from "redux-saga/effects";
import { AuthTypes } from "Redux/Actions/AuthActions";
import {
  login,
  loginSocial,
  authenticateSuccess,
  refreshToken,
  logoutToken,
  register,
} from "Sagas/AuthSagas";

const mapAuthSagas = [
  takeLatest(AuthTypes.LOGIN, login),
  takeLatest(AuthTypes.REGISTER, register),
  takeLatest(AuthTypes.LOGIN_SOCIAL, loginSocial),
  takeLatest(AuthTypes.LOGOUT_TOKEN, logoutToken),
  takeLatest(AuthTypes.AUTHENTICATE_SUCCESS, authenticateSuccess),
  takeLatest(AuthTypes.REFRESH_TOKEN, refreshToken),
];

export default mapAuthSagas;
