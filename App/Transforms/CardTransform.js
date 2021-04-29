import BaseTransform from "./BaseTransform";
export default class CardTransform extends BaseTransform {
  fields = {
    term: "Flutter",
    definition: "SDK của Google",
  };
  constructor(params = {}) {
    super(params);
    this.appendFields(params);
  }
}
