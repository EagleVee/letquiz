import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getStudySets: ["params", "onSuccess", "onFailed"],
  getStudySetsSuccess: ["response"],
  createStudySet: ["params", "onSuccess", "onFailed"],
  updateStudySet: ["id", "params", "onSuccess", "onFailed"],
  createStudySetSuccess: ["response"],
  updateStudySetSuccess: ["response"],
  deleteStudySet: ["id"],
});

export const StudySetTypes = Types;

export default Creators;
