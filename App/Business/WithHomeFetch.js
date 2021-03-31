import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const WithHomeFetch = OriginalComponent => props => {
  const {
    getNewPrograms,
    getSubscribedPrograms,
    getFeaturedTrainers,
    getSubscribedTrainers,
  } = props;

  useEffect(() => {
    getNewPrograms({});
    getFeaturedTrainers({});
    getSubscribedPrograms({});
    getSubscribedTrainers({});
  }, []);
  return <OriginalComponent {...props} />;
};
