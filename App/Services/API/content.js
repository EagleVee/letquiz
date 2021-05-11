import { GET, POST } from "./base";

export function getLanguages() {
  const path = "/content/languages";
  return GET(path);
}
