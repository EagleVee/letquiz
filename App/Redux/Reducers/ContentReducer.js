import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ContentTypes } from "Redux/Actions/ContentActions";
import TransformHelper from "../../Utils/TransformHelper";

export const INITIAL_STATE = Immutable({
  languages: [],
});

export const getLanguagesSuccess = (state, action) => {
  return state.merge({
    languages: action.response.data,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [ContentTypes.GET_LANGUAGES_SUCCESS]: getLanguagesSuccess,
});
