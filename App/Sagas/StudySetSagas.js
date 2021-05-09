import API from "Services/API";
import { call, put } from "redux-saga/effects";
import StudySetActions from "Redux/Actions/StudySetActions";

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
