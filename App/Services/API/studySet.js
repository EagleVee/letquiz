import { GET, POST } from "./base";

export function getStudySets(params = {}) {
  const path = "/study-set/user";
  return GET(path, params);
}
