import API from "Services/API";
import { call, put } from "redux-saga/effects";
import DeviceActions from "Redux/Actions/DeviceActions";
import { LocalStorageService } from "../Services/LocalStorageService";
import Keys from "../Config/Keys";
import { changeLocale } from "../Locales/I18n";

export function* getDevices(action) {
  const response = yield call(API.device.getDevices);
  if (response.status === true) {
    yield put(DeviceActions.getDevicesSuccess(response));
  }
}

export function* handleChangeTheme(action) {
  yield call(LocalStorageService.set, Keys.theme, action.theme);
}

export function* handleChangeLanguage(action) {
  yield call(LocalStorageService.set, Keys.language, action.language);
  yield call(changeLocale, action.language);
}
