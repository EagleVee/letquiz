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

  function login(email, password, onSuccess, onFailed) {
    dispatch(AuthActions.login(email, password, onSuccess, onFailed));
  }

  function register(params, onSuccess, onFailed) {
    dispatch(AuthActions.register(params, onSuccess, onFailed));
  }

  function onLogoutSuccess() {
    NavigationMethods.resetStack("WelcomeScreen");
  }

  function logout(onSuccess = onLogoutSuccess, onFailed) {
    dispatch(AuthActions.logoutToken(onSuccess, onFailed));
  }

  return (
    <OriginalComponent
      {...props}
      logout={logout}
      login={login}
      register={register}
    />
  );
};
