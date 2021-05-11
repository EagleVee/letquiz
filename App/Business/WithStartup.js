import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StartupActions from "../Redux/Actions/StartupActions";
import { useNavigationMethods } from "../Hooks/useNavigationMethods";

export const WithStartup = OriginalComponent => props => {
  const dispatch = useDispatch();
  const NavigationMethods = useNavigationMethods();

  function startupCallback(isAuthenticated) {
    if (isAuthenticated) {
      // NavigationMethods.resetStackToTab();
      NavigationMethods.resetStack("StudySetEditScreen");
    } else {
      NavigationMethods.resetStack("WelcomeScreen");
    }
  }

  useEffect(() => {
    dispatch(StartupActions.startup(startupCallback));
  }, []);
  return <OriginalComponent {...props} />;
};
