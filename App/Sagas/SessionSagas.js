import API from "Services/API";
import { call, put } from "redux-saga/effects";
import SessionActions from "Redux/Actions/SessionActions";

export function* completeExercise(action) {
  const { exerciseId = 0, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.session.completeExercise, exerciseId);
  if (response.status === true) {
    if (response.session && response.session.id) {
      yield put(SessionActions.getSessionDetailSuccess(response.session));
    }
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* getSessionDetail(action) {
  const { sessionId, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.session.getSessionDetail, sessionId);
  if (response.status === true) {
    yield put(SessionActions.getSessionDetailSuccess(sessionId, response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}
