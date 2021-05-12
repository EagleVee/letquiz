import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getStudySetDetailSuccess: ["id", "data"],
});

export const StudySetDetailTypes = Types;

export default Creators;
