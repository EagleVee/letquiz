import { takeLatest } from "redux-saga/effects";
import { ProgramTypes } from "Redux/Actions/ProgramActions";
import {
  getNewPrograms,
  getProgramDetail,
  getSubscribedPrograms,
  getTrainerPrograms,
} from "Sagas/ProgramSagas";

const mapCustomerSagas = [
  takeLatest(ProgramTypes.GET_NEW_PROGRAMS, getNewPrograms),
  takeLatest(ProgramTypes.GET_SUBSCRIBED_PROGRAMS, getSubscribedPrograms),
  takeLatest(ProgramTypes.GET_TRAINER_PROGRAMS, getTrainerPrograms),
  takeLatest(ProgramTypes.GET_PROGRAM_DETAIL, getProgramDetail),
];

export default mapCustomerSagas;
