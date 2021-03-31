import ExerciseTransform from "./ExerciseTransform";
import BaseTransform from "./BaseTransform";
import TransformHelper from "../Utils/TransformHelper";

export default class SetExerciseTransform extends BaseTransform {
  fields = {
    id: 0,
    session_id: 0,
    program_id: 0,
    set_title: "",
    rest_time: 0,
    exercises: [],
    count_exercise: 0,
  };

  transformedExercises = [];

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.transformedExercises = TransformHelper.transformData(
      this.exercises,
      ExerciseTransform,
    );
  }
}
