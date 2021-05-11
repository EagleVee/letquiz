import BaseTransform from "./BaseTransform";
import CardTransform from "./CardTransform";
import TransformHelper from "../Utils/TransformHelper";
import CustomerTransform from "./CustomerTransform";
export default class StudySetTransform extends BaseTransform {
  fields = {
    _id: "",
    title: "",
    cards: [],
    createdBy: new CustomerTransform(),
  };

  transformedCards = [];
  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.transformedCards = TransformHelper.transformData(
      this.cards,
      CardTransform,
    );
  }
}
