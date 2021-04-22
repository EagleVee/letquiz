import { GET, POST } from "./base";

export function completeExercise(id) {
  const path = "/progression/exercise/" + id;
  return POST(path);
}

export function getSessionDetail(id) {
  const path = "/session/" + id;
  return GET(path);
}
