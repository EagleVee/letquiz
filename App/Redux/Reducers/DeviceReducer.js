import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { DeviceTypes } from "Redux/Actions/DeviceActions";
import { DARK_THEME, LIGHT_THEME } from "Config/Themes";

export const INITIAL_STATE = Immutable({
  devices: [],
  theme: DARK_THEME,
  language: "vi",
});

export const getDevicesSuccess = (state, action) => {
  return state.merge({
    devices: action.response.data,
  });
};

export const changeTheme = (state, action) => {
  return state.merge({
    theme: action.theme,
  });
};

export const changeLanguage = (state, action) => {
  return state.merge({
    language: action.language,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [DeviceTypes.GET_DEVICES_SUCCESS]: getDevicesSuccess,
  [DeviceTypes.CHANGE_LANGUAGE]: changeLanguage,
  [DeviceTypes.CHANGE_THEME]: changeTheme,
});
