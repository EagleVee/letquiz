import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  login: ["email", "password", "onSuccess", "onFailed"],
  loginSocial: ["params", "onSuccess", "onFailed"],
  authenticateSuccess: ["response", "onSuccess", "onFailed"],
  register: ["params", "onSuccess", "onFailed"],
  refreshToken: ["onSuccess", "onFailed"],
  refreshTokenSuccess: ["response"],
  logoutToken: ["onSuccess", "onFailed"],
  logoutTokenSuccess: ["response"],
  setAuthenticated: ["isAuthenticated"],
});

export const AuthTypes = Types;

export default Creators;
