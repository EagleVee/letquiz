import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const WithHomeFetch = OriginalComponent => props => {
  const { getStudySets } = props;
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // const customer = useSelector(state => state.customer);
  useEffect(() => {
    const studySetParams = {
      fields: "cards",
    };

    getStudySets(studySetParams);
  }, []);
  return <OriginalComponent {...props} />;
};
