import API from "Services/API";
import { call, put } from "redux-saga/effects";
import StudySetActions from "Redux/Actions/StudySetActions";

export function* getUserStudySets(action) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.studySet.getUserStudySets, params);
  if (response.status === true) {
    yield put(StudySetActions.getUserStudySetsSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}
export function* getStudySets(action) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.studySet.getStudySets, params);
  if (response.status === true) {
    yield put(StudySetActions.getStudySetsSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* createStudySet(action) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.studySet.createStudySet, params);
  if (response.status === true) {
    yield put(StudySetActions.createStudySetSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* updateStudySet(action) {
  const { id, params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.studySet.updateStudySet, id, params);
  if (response.status === true) {
    yield put(StudySetActions.updateStudySetSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* deleteStudySet(action) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.studySet.deleteStudySet, params);
  if (response.status === true) {
    // yield put(StudySetActions.getStudySetsSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}
