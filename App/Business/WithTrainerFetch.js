import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TrainerActions from "../Redux/Actions/TrainerActions";

export const WithTrainerFetch = OriginalComponent => props => {
  const dispatch = useDispatch();
  const trainer = useSelector(state => state.trainer);
  const trainerDetail = useSelector(state => state.trainerDetail);

  function getFeaturedTrainers(params, onSuccess, onFailed) {
    dispatch(TrainerActions.getFeaturedTrainers(params, onSuccess, onFailed));
  }

  function getSubscribedTrainers(params, onSuccess, onFailed) {
    dispatch(TrainerActions.getSubscribedTrainers(params, onSuccess, onFailed));
  }

  function getTrainerDetail(trainerId, onSuccess, onFailed) {
    dispatch(TrainerActions.getTrainerDetail(trainerId, onSuccess, onFailed));
  }
  return (
    <OriginalComponent
      {...props}
      getFeaturedTrainers={getFeaturedTrainers}
      getTrainerDetail={getTrainerDetail}
      getSubscribedTrainers={getSubscribedTrainers}
      trainer={trainer}
      trainerDetail={trainerDetail}
    />
  );
};
