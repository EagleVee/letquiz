import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgramActions from "../Redux/Actions/ProgramActions";

export const WithProgramFetch = OriginalComponent => props => {
  const dispatch = useDispatch();
  const program = useSelector(state => state.program);
  const programDetail = useSelector(state => state.programDetail);

  function getTrainerPrograms(trainerId, onSuccess, onFailed) {
    dispatch(ProgramActions.getTrainerPrograms(trainerId, onSuccess, onFailed));
  }

  function getProgramDetail(programId, onSuccess, onFailed) {
    dispatch(ProgramActions.getProgramDetail(programId, onSuccess, onFailed));
  }

  function getNewPrograms(
    params = { pagination: 10, page: 1 },
    onSuccess,
    onFailed,
  ) {
    dispatch(ProgramActions.getNewPrograms(params, onSuccess, onFailed));
  }

  function getSubscribedPrograms(
    params = { pagination: 10, page: 1 },
    onSuccess,
    onFailed,
  ) {
    dispatch(ProgramActions.getSubscribedPrograms(params, onSuccess, onFailed));
  }

  return (
    <OriginalComponent
      {...props}
      program={program}
      programDetail={programDetail}
      getTrainerPrograms={getTrainerPrograms}
      getProgramDetail={getProgramDetail}
      getNewPrograms={getNewPrograms}
      getSubscribedPrograms={getSubscribedPrograms}
    />
  );
};
