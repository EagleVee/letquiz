import { call, put } from "redux-saga/effects";
import DeviceActions from "Redux/Actions/DeviceActions";
import { LocalStorageService } from "../Services/LocalStorageService";
import Keys from "../Config/Keys";
import API from "../Services/API";
import AuthActions from "../Redux/Actions/AuthActions";
import ContentActions from "../Redux/Actions/ContentActions";

export function* startup(action) {
  const { callback = () => {} } = action;
  const savedLanguage = yield call(
    LocalStorageService.get,
    Keys.language,
    "en",
  );
  yield put(DeviceActions.changeLanguage("en"));

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

  // yield put(AuthActions.setAuthenticated(true));

  yield call(API.auth.setAuthorizationHeader, savedRefreshToken);
  const refreshResponse = yield call(API.auth.refreshToken);
  if (refreshResponse.status === true) {
    isAuthenticated = true;
    yield put(AuthActions.authenticateSuccess(refreshResponse));
  }

  // Callback
  yield call(callback, isAuthenticated);
}
