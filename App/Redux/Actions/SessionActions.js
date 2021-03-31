import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  completeExercise: ["exerciseId", "onSuccess", "onFailed"],
  completeExerciseSuccess: ["sessionId", "response"],
  getSessionDetail: ["sessionId", "onSuccess", "onFailed"],
  getSessionDetailSuccess: ["sessionId", "response"],
});

export const SessionTypes = Types;

export default Creators;
