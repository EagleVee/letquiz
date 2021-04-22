import { takeLatest } from "redux-saga/effects";
import { StartupTypes } from "Redux/Actions/StartupActions";
import { startup } from "Sagas/StartupSagas";

const mapStartupSagas = [takeLatest(StartupTypes.STARTUP, startup)];

export default mapStartupSagas;
