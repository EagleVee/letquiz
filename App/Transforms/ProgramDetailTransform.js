import ProgramTransform from "./ProgramTransform";
import TransformHelper from "../Utils/TransformHelper";
import SessionTransform from "./SessionTransform";
import BaseTransform from "./BaseTransform";

export default class ProgramDetailTransform extends ProgramTransform {
  fields = {
    ...super.fields,
    post: {
      post_content: "",
      tags: [],
    },
    required_programs: [],
    timeline: [],
  };

  description = "";
  transformedTimeline = [];

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.description =
      params.post && params.post.post_content
        ? params.post.post_content
        : this.description;
    this.transformedRequiredPrograms = TransformHelper.transformData(
      this.required_programs,
      ProgramTransform,
    );
    this.transformedTimeline = TransformHelper.transformData(
      this.timeline,
      TimelineTransform,
    );
  }
}

class TimelineTransform extends BaseTransform {
  fields = {
    id: 4,
    is_completed: true,
    percentage_progress: 0,
    sessions: [],
  };

  transformedSessions = [];
  constructor(params) {
    super(params);
    this.appendFields(params);
    this.transformedSessions = TransformHelper.transformData(
      this.sessions,
      SessionTransform,
    );
  }
}
