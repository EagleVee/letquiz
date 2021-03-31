import { takeLatest } from "redux-saga/effects";
import { SessionTypes } from "Redux/Actions/SessionActions";
import { completeExercise, getSessionDetail } from "Sagas/SessionSagas";

const mapSessionSagas = [
  takeLatest(SessionTypes.COMPLETE_EXERCISE, completeExercise),
  takeLatest(SessionTypes.GET_SESSION_DETAIL, getSessionDetail),
];

export default mapSessionSagas;
