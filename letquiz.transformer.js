var upstreamTransformer = require("metro-react-native-babel-transformer");
var sassTransformer = require("react-native-sass-transformer");
var svgTransformer = require("react-native-svg-transformer");

module.exports.transform = function ({ src, filename, options }) {
  const transformers = {
    scss: sassTransformer,
    sass: sassTransformer,
    svg: svgTransformer,
  };

  const extension = filename.split(".").pop();
  const transformer = transformers[extension]
    ? transformers[extension]
    : upstreamTransformer;
  return transformer.transform({ src, filename, options });
};
