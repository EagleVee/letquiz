import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SessionActions from "../Redux/Actions/SessionActions";

export const WithProgression = OriginalComponent => props => {
  const dispatch = useDispatch();

  function completeExercise(exerciseId, onSuccess, onFailed) {
    dispatch(SessionActions.completeExercise(exerciseId, onSuccess, onFailed));
  }
  return <OriginalComponent {...props} completeExercise={completeExercise} />;
};
