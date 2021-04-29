import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ContentTypes } from "Redux/Actions/ContentActions";
import TransformHelper from "../../Utils/TransformHelper";

export const INITIAL_STATE = Immutable({
  faqs: [],
});

export const getFAQsSuccess = (state, action) => {
  return state.merge({});
};

export const reducer = createReducer(INITIAL_STATE, {
  [ContentTypes.GET_FAQS_SUCCESS]: getFAQsSuccess,
});
