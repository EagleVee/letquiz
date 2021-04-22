import { GET, POST } from "./base";

export function getCustomer() {
  const path = "/customer";
  return GET(path);
}
