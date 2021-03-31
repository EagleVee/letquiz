import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getTrainerPrograms: ["trainerId", "onSuccess", "onFailed"],
  getTrainerProgramsSuccess: ["trainerId", "response"],
  getProgramDetail: ["programId", "onSuccess", "onFailed"],
  getProgramDetailSuccess: ["programId", "response"],
  getNewPrograms: ["params", "onSuccess", "onFailed"],
  getNewProgramsSuccess: ["response"],
  subscribeProgram: ["programId", "onSuccess", "onFailed"],
  getSubscribedPrograms: ["params", "onSuccess", "onFailed"],
  getSubscribedProgramsSuccess: ["response"],
});

export const ProgramTypes = Types;

export default Creators;
