import BaseTransform from "./BaseTransform";
import TrainerTransform from "./TrainerTransform";
import TransformHelper from "../Utils/TransformHelper";
import TimeService from "../Services/TimeService";

export default class TrainerSubscriptionTransform extends BaseTransform {
  fields = {
    id: 0,
    trainer_id: null,
    expired_at: null,
    created_at: "",
    subscription_status: null,
    trainer: {},
  };

  expireDate = "";

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.transformedTrainer = TransformHelper.transformData(
      this.trainer,
      TrainerTransform,
    );
    this.expireDate = this.expired_at
      ? TimeService.formatMySQLDatetime(this.expired_at, "DD/MM/YYYY")
      : this.expireDate;
  }
}
