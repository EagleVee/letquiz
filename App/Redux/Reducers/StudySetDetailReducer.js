import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { StudySetTypes } from "../Actions/StudySetActions";
import TransformHelper from "../../Utils/TransformHelper";
import StudySetTransform from "../../Transforms/StudySetTransform";

export const INITIAL_STATE = Immutable({});

export const getStudySetDetailSuccess = (state, action) => {
  return state.merge({
    [action.id]: action.data,
  });
};

export const updateStudySetSuccess = (state, action) => {
  const transformedSet = TransformHelper.transformData(
    action.response.data,
    StudySetTransform,
  );
  return state.merge({
    [transformedSet._id]: transformedSet,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [StudySetTypes.GET_STUDY_SET_DETAIL_SUCCESS]: getStudySetDetailSuccess,
  [StudySetTypes.UPDATE_STUDY_SET_SUCCESS]: updateStudySetSuccess,
});
