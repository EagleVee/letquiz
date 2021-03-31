import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ProgramTypes } from "Redux/Actions/ProgramActions";
import TransformHelper from "Utils/TransformHelper";
import ProgramDetailTransform from "../../Transforms/ProgramDetailTransform";

export const INITIAL_STATE = Immutable({});

export const getProgramDetailSuccess = (state, action) => {
  const { response, programId } = action;
  const transformedData = TransformHelper.transformData(
    response.data,
    ProgramDetailTransform,
  );
  return state.merge({
    [programId]: transformedData,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [ProgramTypes.GET_PROGRAM_DETAIL_SUCCESS]: getProgramDetailSuccess,
});
