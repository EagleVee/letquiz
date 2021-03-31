import BaseTransform from "../Transforms/BaseTransform";

export default class TransformHelper {
  static transformData(
    data,
    TransformClass = BaseTransform,
    returnArray = false,
  ) {
    if (Array.isArray(data)) {
      return data.map(e => {
        return new TransformClass(e);
      });
    } else if (returnArray) {
      return [new TransformClass(data)];
    } else {
      return new TransformClass(data);
    }
  }
}
