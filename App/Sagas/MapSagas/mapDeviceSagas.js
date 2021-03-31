import { takeLatest } from "redux-saga/effects";
import { DeviceTypes } from "Redux/Actions/DeviceActions";
import {
  getDevices,
  handleChangeLanguage,
  handleChangeTheme,
} from "Sagas/DeviceSagas";

const mapCustomerSagas = [
  takeLatest(DeviceTypes.GET_DEVICES, getDevices),
  takeLatest(DeviceTypes.CHANGE_THEME, handleChangeTheme),
  takeLatest(DeviceTypes.CHANGE_LANGUAGE, handleChangeLanguage),
];

export default mapCustomerSagas;
