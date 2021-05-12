import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StudySetActions from "../Redux/Actions/StudySetActions";

export const WithStudySetFetch = OriginalComponent => props => {
  const dispatch = useDispatch();
  const studySet = useSelector(state => state.studySet);
  function getStudySets(params, onSuccess, onFailed) {
    dispatch(StudySetActions.getStudySets(params, onSuccess, onFailed));
  }
  function getUserStudySets(params, onSuccess, onFailed) {
    dispatch(StudySetActions.getUserStudySets(params, onSuccess, onFailed));
  }
  function createStudySet(params, onSuccess, onFailed) {
    dispatch(StudySetActions.createStudySet(params, onSuccess, onFailed));
  }
  function updateStudySet(params, onSuccess, onFailed) {
    dispatch(StudySetActions.updateStudySet(params, onSuccess, onFailed));
  }
  function deleteStudySet(params, onSuccess, onFailed) {
    dispatch(StudySetActions.deleteStudySet(params, onSuccess, onFailed));
  }
  return (
    <OriginalComponent
      {...props}
      studySet={studySet}
      getStudySets={getStudySets}
      getUserStudySets={getUserStudySets}
      createStudySet={createStudySet}
      updateStudySet={updateStudySet}
      deleteStudySet={deleteStudySet}
    />
  );
};
