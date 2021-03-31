import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ProgramTypes } from "Redux/Actions/ProgramActions";
import TransformHelper from "Utils/TransformHelper";
import SessionDetailTransform from "Transforms/SessionDetailTransform";
import { SessionTypes } from "../Actions/SessionActions";

export const INITIAL_STATE = Immutable({});

export const getSessionDetailSuccess = (state, action) => {
  const { response, sessionId } = action;
  const transformedData = TransformHelper.transformData(
    response.data,
    SessionDetailTransform,
  );
  return state.merge({
    [sessionId]: transformedData,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [SessionTypes.GET_SESSION_DETAIL_SUCCESS]: getSessionDetailSuccess,
});
