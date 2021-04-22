import { instance, POST } from "./base";

export function setAuthorizationHeader(accessToken) {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export function login(phone, password) {
  const path = "/customer/login";
  const data = {
    phone: phone,
    password: password,
  };
  return POST(path, data);
}

export function loginSocial(params) {
  const path = "/customer/login";
  return POST(path, params);
}

export function refreshToken() {
  const path = "/customer/refresh";
  return POST(path);
}

export function logout() {
  const path = "/customer/logout";
  return POST(path);
}
