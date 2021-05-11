import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StudySetActions from "../Redux/Actions/StudySetActions";

export const WithStudySetFetch = OriginalComponent => props => {
  const dispatch = useDispatch();
  const studySet = useSelector(state => state.studySet);
  function getStudySets(params, onSuccess, onFailed) {
    dispatch(StudySetActions.getStudySets(params, onSuccess, onFailed));
  }
  return <OriginalComponent {...props} getStudySets={getStudySets} />;
};
