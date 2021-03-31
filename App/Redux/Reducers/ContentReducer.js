import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ContentTypes } from "Redux/Actions/ContentActions";
import TransformHelper from "../../Utils/TransformHelper";
import FAQTransform from "../../Transforms/FAQTransform";

export const INITIAL_STATE = Immutable({
  faqs: [],
});

export const getFAQsSuccess = (state, action) => {
  return state.merge({
    faqs: TransformHelper.transformData(action.response.data, FAQTransform),
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [ContentTypes.GET_FAQS_SUCCESS]: getFAQsSuccess,
});
