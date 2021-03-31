import API from "Services/API";
import { call, put } from "redux-saga/effects";
import TrainerActions from "Redux/Actions/TrainerActions";

export function* getFeaturedTrainers(action) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.trainer.getFeaturedTrainers, params);
  if (response.status === true) {
    yield put(TrainerActions.getFeaturedTrainersSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* getSubscribedTrainers(action) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.trainer.getSubscribedTrainers, params);
  if (response.status === true) {
    yield put(TrainerActions.getSubscribedTrainersSuccess(response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}

export function* getTrainerDetail(action) {
  const { trainerId, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.trainer.getTrainerDetail, trainerId);
  if (response.status === true) {
    yield put(TrainerActions.getTrainerDetailSuccess(trainerId, response));
    yield call(onSuccess, response);
  } else {
    yield call(onFailed, response);
  }
}
