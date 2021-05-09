import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { StudySetTypes } from "Redux/Actions/StudySetActions";
import TransformHelper from "../../Utils/TransformHelper";
import StudySetTransform from "../../Transforms/StudySetTransform";
import { studySets } from "../../Fixtures/StudySet";

export const INITIAL_STATE = Immutable({
  currentStudySets: [],
});

export const getCurrentStudySetsSuccess = (state, action) => {
  return state.merge({
    currentStudySets: TransformHelper.transformData(
      action.response.data,
      StudySetTransform,
    ),
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [StudySetTypes.GET_STUDY_SETS_SUCCESS]: getCurrentStudySetsSuccess,
});
