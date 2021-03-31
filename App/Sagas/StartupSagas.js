import { Appearance } from "react-native";
import { call, put } from "redux-saga/effects";
import ProgramActions from "Redux/Actions/ProgramActions";
import DeviceActions from "Redux/Actions/DeviceActions";
import { LocalStorageService } from "../Services/LocalStorageService";
import Keys from "../Config/Keys";
import API from "../Services/API";
import AuthActions from "../Redux/Actions/AuthActions";
import ContentActions from "../Redux/Actions/ContentActions";

export function* startup(action) {
  const { callback = () => {} } = action;
  // yield put(ProgramActions.getNewProgramsSuccess());

  // Handle language
  const savedLanguage = yield call(
    LocalStorageService.get,
    Keys.language,
    "vi",
  );
  yield put(DeviceActions.changeLanguage(savedLanguage));

  // Handle dark/light theme
  const savedTheme = yield call(
    LocalStorageService.get,
    Keys.theme,
    // Appearance.getColorScheme(),
    "dark",
  );
  yield put(DeviceActions.changeTheme(savedTheme));

  // Handle authentication
  let isAuthenticated = false;
  const savedRefreshToken = yield call(
    LocalStorageService.get,
    Keys.refreshToken,
    "",
  );

  yield call(API.auth.setAuthorizationHeader, savedRefreshToken);
  const refreshResponse = yield call(API.auth.refreshToken);
  if (refreshResponse.status === true) {
    isAuthenticated = true;
    yield put(AuthActions.authenticateSuccess(refreshResponse));
  }

  yield put(ContentActions.getFaqs());

  // Callback
  yield call(callback, isAuthenticated);
}
