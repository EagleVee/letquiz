import { takeLatest } from "redux-saga/effects";
import { StudySetTypes } from "Redux/Actions/StudySetActions";
import {
  createStudySet,
  deleteStudySet,
  getStudySets,
  getUserStudySets,
  updateStudySet,
} from "Sagas/StudySetSagas";

const mapStudySetSagas = [
  takeLatest(StudySetTypes.GET_STUDY_SETS, getStudySets),
  takeLatest(StudySetTypes.GET_USER_STUDY_SETS, getUserStudySets),
  takeLatest(StudySetTypes.CREATE_STUDY_SET, createStudySet),
  takeLatest(StudySetTypes.UPDATE_STUDY_SET, updateStudySet),
  takeLatest(StudySetTypes.DELETE_STUDY_SET, deleteStudySet),
];

export default mapStudySetSagas;
