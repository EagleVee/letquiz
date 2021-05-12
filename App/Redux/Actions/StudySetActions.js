import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getStudySets: ["params", "onSuccess", "onFailed"],
  getStudySetsSuccess: ["response"],
  getUserStudySets: ["params", "onSuccess", "onFailed"],
  getUserStudySetsSuccess: ["response"],
  getStudySetDetail: ["id"],
  getStudySetDetailSuccess: ["id", "data"],
  createStudySet: ["params", "onSuccess", "onFailed"],
  updateStudySet: ["id", "params", "onSuccess", "onFailed"],
  createStudySetSuccess: ["response"],
  updateStudySetSuccess: ["response"],
  deleteStudySet: ["id"],
});

export const StudySetTypes = Types;

export default Creators;
