import { GET, POST } from "./base";

export function getDevices() {
  const path = "/devices";
  return GET(path);
}
