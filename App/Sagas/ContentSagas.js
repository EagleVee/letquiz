import API from "Services/API";
import { call, put } from "redux-saga/effects";
import ContentActions from "Redux/Actions/ContentActions";
import { LocalStorageService } from "../Services/LocalStorageService";
import Keys from "../Config/Keys";

export function* getLanguages(action) {
  const response = yield call(API.content.getLanguages);
  if (response.status === true) {
    yield call(LocalStorageService.set, Keys.languages, response.data);
    yield put(ContentActions.getLanguagesSuccess(response));
  }
}
