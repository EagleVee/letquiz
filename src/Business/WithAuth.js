import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorageService } from "../Services/LocalStorageService";
import Keys from "../Config/Keys";
import AuthActions from "../Redux/Actions/AuthActions";
import { useNavigationMethods } from "../Hooks/useNavigationMethods";

export const WithAuth = OriginalComponent => props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const NavigationMethods = useNavigationMethods();

  function logout(onSuccess = NavigationMethods.resetStackToTab, onFailed) {
    dispatch(AuthActions.logoutToken(onSuccess, onFailed));
  }

  return <OriginalComponent {...props} logout={logout} />;
};
