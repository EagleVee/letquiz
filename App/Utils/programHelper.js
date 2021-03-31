import ProgramTransform from "../Transforms/ProgramTransform";
import I18n from "../Locales";
import { ProgramState } from "../Config/Program";

export function getProgramState(
  transformedProgram = new ProgramTransform(),
  subscribedProgramIds,
  subscribedTrainerIds,
) {
  try {
    const { transformedTrainer } = transformedProgram;

    if (subscribedProgramIds.includes(transformedProgram.id)) {
      return ProgramState.PROGRAM_SUBSCRIBED;
    } else if (transformedProgram.is_free === true) {
      return ProgramState.PROGRAM_FREE;
    } else if (subscribedTrainerIds.includes(transformedTrainer.id)) {
      return ProgramState.TRAINER_SUBSCRIBED;
    } else {
      return ProgramState.TRAINER_UNSUBSCRIBED;
    }
  } catch (e) {
    return null;
  }
}
