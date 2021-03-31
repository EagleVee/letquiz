import API from "Services/API";
import { call, put } from "redux-saga/effects";
import ProgramActions from "Redux/Actions/ProgramActions";

export function* getTrainerPrograms(action) {
  const { trainerId, onSuccess = () => {}, onFailed = () => {} } = action;
  const params = {
    trainer_id: trainerId,
  };
  const response = yield call(API.program.getPrograms, params);
  if (response.status === true) {
    yield put(ProgramActions.getTrainerProgramsSuccess(trainerId, response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* getProgramDetail(action) {
  const { programId, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.program.getProgramById, programId);
  if (response.status === true) {
    yield put(ProgramActions.getProgramDetailSuccess(programId, response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* getNewPrograms(action) {
  const { params = {}, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.program.getPrograms, params);
  if (response.status === true) {
    yield put(ProgramActions.getNewProgramsSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* getSubscribedPrograms(action) {
  const { params = {}, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.program.getSubscribedPrograms, params);
  if (response.status === true) {
    yield put(ProgramActions.getSubscribedProgramsSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}
