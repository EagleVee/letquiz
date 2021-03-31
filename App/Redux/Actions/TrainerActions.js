import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  subscribeTrainer: ["trainerId", "onSuccess", "onFailed"],
  getFeaturedTrainers: ["params", "onSuccess", "onFailed"],
  getFeaturedTrainersSuccess: ["response"],
  getTrainerDetail: ["trainerId", "onSuccess", "onFailed"],
  getTrainerDetailSuccess: ["trainerId", "response"],
  getSubscribedTrainers: ["params", "onSuccess", "onFailed"],
  getSubscribedTrainersSuccess: ["response"],
});

export const TrainerTypes = Types;

export default Creators;
