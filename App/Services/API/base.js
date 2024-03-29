import axios from "axios";
import * as qs from "query-string";

import {
  API_ENDPOINT_V1,
  CLIENT_ID,
  CLIENT_SECRET,
  REQUEST_TIME_OUT,
  STATUS_BAD_REQUEST,
  STATUS_INTERNAL_SERVER_ERROR,
  STATUS_OK,
  STATUS_UNAUTHORIZED,
} from "Config/Remote";
import { deviceId, deviceName, getPlatformOS } from "Utils/platform";
import { LocalStorageService } from "../LocalStorageService";
import Keys from "../../Config/Keys";

export const instance = axios.create({
  baseURL: API_ENDPOINT_V1,
  timeout: REQUEST_TIME_OUT,
  headers: {
    "Client-Id": CLIENT_ID,
    "Client-Secret": CLIENT_SECRET,
    "Device-Type": getPlatformOS(),
    "Device-Name": deviceName,
    "Device-Id": deviceId,
  },
});

const checkStatus = response => {
  console.log("RESPONSE ", response.config.url, ": ", response);
  if (response.status === STATUS_OK) {
    return {
      status: true,
      ...response.data,
    };
  }
  return {};
};

const logError = error => {
  console.log("ERROR RESPONSE ", error);
  let errorData = {};
  if (error.response) {
    const { status, data } = error.response;
    if (status === STATUS_BAD_REQUEST) {
      errorData = data;
    } else if (status === STATUS_UNAUTHORIZED) {
      errorData = data;
    } else if (status === STATUS_INTERNAL_SERVER_ERROR) {
      errorData = {
        data: "Mã lỗi" + status,
        msg: "Mã lỗi" + status,
        code: status,
      };
    } else {
      errorData = {
        message: "Lỗi server",
        error: error,
      };
    }
  }

  return {
    status: false,
    ...errorData,
  };
};

function onSuccess(response) {
  return response;
}

async function onFailure(error) {
  const originalRequest = error.config;
  const refreshToken = await LocalStorageService.get(Keys.refreshToken, "");
  if (
    refreshToken &&
    refreshToken.length > 0 &&
    error.response?.status === STATUS_UNAUTHORIZED &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;
    const res = await instance.post(
      `/auth/token/refresh`,
      {},
      {
        headers: {
          Authorization: refreshToken,
        },
      },
    );

    console.log("REFRESH TOKEN RESPONSE", res);

    if (res.status === STATUS_OK) {
      const { accessToken, refreshToken } = res.data.data;
      await LocalStorageService.set(Keys.refreshToken, refreshToken);
      instance.defaults.headers.common.Authorization = accessToken;
      originalRequest.headers.Authorization = accessToken;
      return instance(originalRequest, {
        headers: {
          Authorization: accessToken,
        },
      });
    }
  }

  return Promise.reject(error);
}

instance.interceptors.response.use(onSuccess, onFailure);

export const GET = (url, params, config = {}) => {
  const queryString = qs.stringify(params);
  const urlWithQuery = `${url}?${queryString}`;
  return instance
    .get(urlWithQuery, config)
    .then(checkStatus)
    .catch(logError);
};

export const POST = (url, params, config = {}) => {
  return instance
    .post(url, params, config)
    .then(checkStatus)
    .catch(logError);
};

export const PUT = (url, params, config = {}) => {
  return instance
    .put(url, params, config)
    .then(checkStatus)
    .catch(logError);
};

export const DELETE = (url, config = {}) => {
  return instance
    .delete(url, config)
    .then(checkStatus)
    .catch(logError);
};
