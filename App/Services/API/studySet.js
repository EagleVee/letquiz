import { DELETE, GET, POST, PUT } from "./base";

export function getUserStudySets(params = {}) {
  const path = "/study-set/user";
  return GET(path, params);
}
export function getStudySets(params = {}) {
  const path = "/study-set";
  return GET(path, params);
}

export function createStudySet(params = {}) {
  const path = "/study-set";
  return POST(path, params);
}

export function updateStudySet(id, params = {}) {
  const path = "/study-set/" + id;
  return PUT(path, params);
}

export function deleteStudySet(id) {
  const path = "/study-set/" + id;
  return DELETE(path);
}
