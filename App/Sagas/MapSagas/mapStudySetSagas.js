import { takeLatest } from "redux-saga/effects";
import { StudySetTypes } from "Redux/Actions/StudySetActions";
import { getStudySets } from "Sagas/StudySetSagas";

const mapStudySetSagas = [
  takeLatest(StudySetTypes.GET_STUDY_SETS, getStudySets),
];

export default mapStudySetSagas;
