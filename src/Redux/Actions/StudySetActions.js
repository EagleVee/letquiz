import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getStudySets: ["params", "onSuccess", "onFailed"],
  getStudySetsSuccess: ["response"],
});

export const StudySetTypes = Types;

export default Creators;
