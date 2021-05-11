import BaseTransform from "./BaseTransform";
export default class CardTransform extends BaseTransform {
  fields = {
    term: "",
    definition: "",
  };
  constructor(params = {}) {
    super(params);
    this.appendFields(params);
  }
}
