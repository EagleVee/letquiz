import lodash from "lodash";

export function mergeObjectProperties(objectList) {
  const result = {};

  for (const object of objectList) {
    const keys = Object.keys(object);
    for (const key of keys) {
      if (result[key] && lodash.isObject(result[key])) {
        result[key] = {
          ...result[key],
          ...object[key],
        };
      } else {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export function mergeArray(...arrayList) {
  return [].concat(...arrayList);
}

export function normalisedSource(source) {
  const normalisedSource =
    source && typeof source.uri === "string" && !source.uri.split("http")[1]
      ? null
      : source;
  return source && source.uri ? normalisedSource : source;
}

export default { mergeObjectProperties, mergeArray };
