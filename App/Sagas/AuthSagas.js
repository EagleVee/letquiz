import API from "Services/API";
import { call, put } from "redux-saga/effects";
import AuthActions from "Redux/Actions/AuthActions";
import CustomerActions from "Redux/Actions/CustomerActions";
import DeviceActions from "Redux/Actions/DeviceActions";
import { LocalStorageService } from "../Services/LocalStorageService";
import Keys from "../Config/Keys";

export function* login(action) {
  const { phone, password, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.auth.login, phone, password);
  if (response.status === true) {
    yield put(AuthActions.authenticateSuccess(response, onSuccess, onFailed));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* register(action) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.auth.register, params);
  if (response.status === true) {
    yield put(AuthActions.authenticateSuccess(response, onSuccess, onFailed));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* logoutToken(action) {
  const { onSuccess = () => {}, onFailed = () => {} } = action;
  yield call(LocalStorageService.delete, Keys.refreshToken);
  yield put(AuthActions.logoutTokenSuccess());
  yield call(onSuccess);
}

export function* loginSocial(action) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.auth.loginSocial, params);
  if (response.status === true) {
    yield put(AuthActions.authenticateSuccess(response, onSuccess));
  } else {
    yield call(onFailed, response);
  }
}

export function* refreshToken(action) {
  const { onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.auth.refreshToken);
  if (response.status === true) {
    yield put(AuthActions.authenticateSuccess(response, onSuccess));
  } else {
    yield call(onFailed, response);
  }
}

export function* authenticateSuccess(action) {
  const { response, onSuccess = () => {} } = action;
  yield call(handleTokenResponse, response);
  yield call(getCustomerData);
  yield put(AuthActions.setAuthenticated(true));
  yield call(onSuccess, response);
}

function* handleTokenResponse(response) {
  const { accessToken, refreshToken } = response;
  yield call(API.auth.setAuthorizationHeader, accessToken);
  yield call(LocalStorageService.set, Keys.refreshToken, refreshToken);
}

function* getCustomerData() {
  yield put(CustomerActions.getCustomer());
  yield put(DeviceActions.getDevices());
}
