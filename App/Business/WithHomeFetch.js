import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const WithHomeFetch = OriginalComponent => props => {
  const { getUserStudySets } = props;
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  useEffect(() => {
    getUserStudySets({});
  }, []);
  return <OriginalComponent {...props} />;
};
