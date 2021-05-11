import { instance, POST } from "./base";

export function setAuthorizationHeader(accessToken) {
  instance.defaults.headers.common.Authorization = accessToken;
}

export function login(email, password) {
  const path = "/auth/login";
  const data = {
    email: email,
    password: password,
  };
  return POST(path, data);
}

export function register(params) {
  const path = "/auth/register";
  return POST(path, params);
}

export function refreshToken() {
  const path = "/auth/token/refresh";
  return POST(path);
}
