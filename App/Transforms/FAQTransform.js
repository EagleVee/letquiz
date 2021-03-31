import BaseTransform from "./BaseTransform";
export default class FAQTransform extends BaseTransform {
  fields = {
    active_status: true,
    answer: "",
    client_id: 0,
    created_at: null,
    id: 0,
    question: "",
    reference_url: null,
    updated_at: null,
  };

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
  }
}
