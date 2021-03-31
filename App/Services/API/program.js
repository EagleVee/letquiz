import { GET, POST } from "./base";

export function getPrograms(params) {
  const path = "/programs";
  return GET(path, params);
}

export function getSubscribedPrograms(params) {
  const path = "/program-subscriptions";
  return GET(path, params);
}

export function getProgramById(id) {
  const path = "/program/" + id;
  return GET(path);
}
