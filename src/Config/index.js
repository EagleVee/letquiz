export function getConfig(key, configs) {
  return configs[key] ? configs[key] : configs.default ? configs.default : null;
}
