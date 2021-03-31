import PropTypes from "prop-types";
export function checkType(prop, type) {
  return prop && typeof prop === type;
}

export function isValid(prop) {
  return prop !== undefined && prop !== null;
}

export function getValidValue(prop, defaultValue) {
  return prop !== undefined &&
    prop !== null &&
    typeof prop === typeof defaultValue
    ? prop
    : defaultValue;
}

export function getIntValue(prop, defaultValue = 0) {
  const data = parseInt(prop);
  if (typeof data === "number") {
    return data;
  } else {
    return defaultValue;
  }
}

export function getValueFromSelector(key, selector) {
  return selector[key]
    ? selector[key]
    : selector.default
    ? selector.default
    : null;
}

export function isFunction(checkFunction) {
  return checkFunction && typeof checkFunction === "function";
}

export const PropTypesValue = {
  ...PropTypes,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
