import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SessionActions from "../Redux/Actions/SessionActions";

export const WithSessionFetch = OriginalComponent => props => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const sessionDetail = useSelector(state => state.sessionDetail);

  function getSessionDetail(sessionId, onSuccess, onFailed) {
    dispatch(SessionActions.getSessionDetail(sessionId, onSuccess, onFailed));
  }

  return (
    <OriginalComponent
      {...props}
      getSessionDetail={getSessionDetail}
      session={session}
      sessionDetail={sessionDetail}
    />
  );
};
