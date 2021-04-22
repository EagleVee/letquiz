import { takeLatest } from "redux-saga/effects";
import { StudySetTypes } from "Redux/Actions/StudySetActions";
import { doNothing } from "Sagas/StudySetSagas";

const mapStudySetSagas = [
  takeLatest(StudySetTypes.DO_NOTHING, doNothing),
];

export default mapStudySetSagas;
