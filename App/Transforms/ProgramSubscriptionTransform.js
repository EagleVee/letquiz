import BaseTransform from "./BaseTransform";
import ProgramTransform from "./ProgramTransform";
import TransformHelper from "../Utils/TransformHelper";

export default class ProgramSubscriptionTransform extends BaseTransform {
  fields = {
    id: 0,
    program_id: null,
    created_at: "",
    subscription_status: null,
    program: {},
  };

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.transformedProgram = TransformHelper.transformData(
      this.program,
      ProgramTransform,
    );
  }
}
