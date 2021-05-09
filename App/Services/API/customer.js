import { GET, POST } from "./base";

export function getCustomer() {
  const path = "/user";
  return GET(path);
}
