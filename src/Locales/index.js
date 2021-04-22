import BaseI18n from "./I18n";

const missingTranslationRegex = /^\[missing ".*" translation\]$/;

// This function is a wrapper to avoid exception wich leads in a crash
const translateOrFallback = (initialMsg, options) => {
  if (typeof initialMsg !== "string") {
    __DEV__ &&
      console.log(
        `I18n: you must give a string to translate instead of "${typeof initialMsg}"`,
      );

    return "";
  }

  return BaseI18n.t(initialMsg, options);
};
const I18n = {
  ...BaseI18n,
  t: translateOrFallback,
};

export default I18n;
