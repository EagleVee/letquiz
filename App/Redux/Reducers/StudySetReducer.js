import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { StudySetTypes } from "Redux/Actions/StudySetActions";
import TransformHelper from "../../Utils/TransformHelper";
import StudySetTransform from "../../Transforms/StudySetTransform";

export const INITIAL_STATE = Immutable({
  userStudySets: [],
  studySets: [],
});

export const getStudySetsSuccess = (state, action) => {
  return state.merge({
    studySets: TransformHelper.transformData(
      action.response.data,
      StudySetTransform,
    ),
  });
};
export const getUserStudySetsSuccess = (state, action) => {
  return state.merge({
    userStudySets: TransformHelper.transformData(
      action.response.data,
      StudySetTransform,
    ),
  });
};

export const createStudySetSuccess = (state, action) => {
  const transformedSet = TransformHelper.transformData(
    action.response.data,
    StudySetTransform,
  );
  const _studySets = [...state.userStudySets];
  _studySets.unshift(transformedSet);
  return state.merge({
    userStudySets: _studySets,
  });
};

export const updateStudySetSuccess = (state, action) => {
  const transformedSet = TransformHelper.transformData(
    action.response.data,
    StudySetTransform,
  );
  const _studySets = [...state.userStudySets];
  const findIndex = _studySets.findIndex(e => e._id === transformedSet._id);
  if (findIndex >= 0) {
    _studySets[findIndex] = transformedSet;
  }
  return state.merge({
    userStudySets: _studySets,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [StudySetTypes.GET_STUDY_SETS_SUCCESS]: getStudySetsSuccess,
  [StudySetTypes.GET_USER_STUDY_SETS_SUCCESS]: getUserStudySetsSuccess,
  [StudySetTypes.CREATE_STUDY_SET_SUCCESS]: createStudySetSuccess,
  [StudySetTypes.UPDATE_STUDY_SET_SUCCESS]: updateStudySetSuccess,
});
