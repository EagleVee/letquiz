import { GET, POST } from "./base";

export function getFeaturedTrainers(params) {
  const path = "/featured-trainers";
  return GET(path, params);
}

export function getSubscribedTrainers(params) {
  const path = "/trainer-subscriptions";
  return GET(path, params);
}

export function getTrainerDetail(trainerId) {
  const path = "/trainer/" + trainerId;
  return GET(path);
}
