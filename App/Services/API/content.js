import { GET, POST } from "./base";

export function getFaqs() {
  const path = "/faqs";
  return GET(path);
}
