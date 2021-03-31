import I18n from "react-native-i18n";

I18n.fallbacks = true;

I18n.translations = {
  vi: require("./vi.json"),
  en: require("./en.json"),
};

export const changeLocale = locale => {
  I18n.locale = locale;
};

export function getLocale() {
  return I18n.locale.substr(0, 2);
}

const languageCode = getLocale();

switch (languageCode) {
  case "en":
    I18n.translations.el = require("./en.json");
    break;
  case "vn":
    I18n.translations.el = require("./vi.json");
    break;
  case "vi":
    I18n.translations.es = require("./vi.json");
    break;
  default:
    I18n.translations.es = require("./vi.json");
}

export default I18n;
