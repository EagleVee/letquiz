import { takeLatest } from "redux-saga/effects";
import { TrainerTypes } from "Redux/Actions/TrainerActions";
import {
  getFeaturedTrainers,
  getSubscribedTrainers,
  getTrainerDetail,
} from "../TrainerSagas";

const mapTrainerSagas = [
  takeLatest(TrainerTypes.GET_FEATURED_TRAINERS, getFeaturedTrainers),
  takeLatest(TrainerTypes.GET_SUBSCRIBED_TRAINERS, getSubscribedTrainers),
  takeLatest(TrainerTypes.GET_TRAINER_DETAIL, getTrainerDetail),
];

export default mapTrainerSagas;
