import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getStudySets: ["params", "onSuccess", "onFailed"],
  getStudySetsSuccess: ["response"],
  createStudySet: ["params", "onSuccess", "onFailed"],
  createStudySetSuccess: ["response"],
});

export const StudySetTypes = Types;

export default Creators;
