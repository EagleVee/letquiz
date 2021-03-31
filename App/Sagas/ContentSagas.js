import API from "Services/API";
import { call, put } from "redux-saga/effects";
import ContentActions from "Redux/Actions/ContentActions";

export function* getFaqs(action) {
  const response = yield call(API.content.getFaqs);
  if (response.status === true) {
    yield put(ContentActions.getFaqsSuccess(response));
  }
}
