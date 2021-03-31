import BaseTransform from "./BaseTransform";
import TransformHelper from "../Utils/TransformHelper";
import SetExerciseTransform from "./SetExerciseTransform";

export default class SessionTransform extends BaseTransform {
  fields = {
    id: 0,
    session_title: "",
    is_completed: false,
    percentage_progress: 0,
    program_id: 0,
    session_duration: 0,
    count_set_exercise: 0,
    set_exercises: [],
  };

  transformedSetExercises = [];

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.transformedSetExercises = TransformHelper.transformData(
      this.set_exercises,
      SetExerciseTransform,
    );
  }
}
