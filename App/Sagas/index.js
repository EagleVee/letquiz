import { all } from "redux-saga/effects";
import { mergeArray } from "../Utils/helperFunctions";
import mapStartupSagas from "./MapSagas/mapStartupSagas";
import mapAuthSagas from "./MapSagas/mapAuthSagas";
import mapCustomerSagas from "./MapSagas/mapCustomerSagas";
import mapDeviceSagas from "./MapSagas/mapDeviceSagas";
import mapProgramSagas from "./MapSagas/mapProgramSagas";
import mapTrainerSagas from "./MapSagas/mapTrainerSagas";
import mapSessionSagas from "./MapSagas/mapSessionSagas";
import mapContentSagas from "./MapSagas/mapContentSagas";

/* ------------- Types ------------- */

export default function* root() {
  yield all(
    mergeArray(
      mapStartupSagas,
      mapAuthSagas,
      mapCustomerSagas,
      mapDeviceSagas,
      mapProgramSagas,
      mapTrainerSagas,
      mapSessionSagas,
      mapContentSagas,
    ),
  );
}
