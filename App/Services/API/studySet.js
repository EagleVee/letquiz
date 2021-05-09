import { GET, POST } from "./base";

export function getStudySets(params = {}) {
  const path = "/study-set";
  return GET(path, params);
}
