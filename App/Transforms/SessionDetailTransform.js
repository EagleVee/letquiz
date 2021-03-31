import SessionTransform from "./SessionTransform";

export default class SessionDetailTransform extends SessionTransform {
  transformedExerciseList = [];

  constructor(props = {}) {
    super(props);
    this.transformedExerciseList = this.transformedSetExercises.reduce(
      (value, set) => {
        return [...value, ...set.transformedExercises];
      },
      [],
    );
  }
}
