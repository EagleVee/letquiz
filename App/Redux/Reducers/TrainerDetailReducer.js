import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { TrainerTypes } from "Redux/Actions/TrainerActions";
import TransformHelper from "../../Utils/TransformHelper";
import TrainerDetailTransform from "../../Transforms/TrainerDetailTransform";

export const INITIAL_STATE = Immutable({});

export const getTrainerDetailSuccess = (state, action) => {
  const { response, trainerId } = action;
  const transformedTrainer = TransformHelper.transformData(
    response.data,
    TrainerDetailTransform,
  );
  return state.merge({
    [trainerId]: transformedTrainer,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [TrainerTypes.GET_TRAINER_DETAIL_SUCCESS]: getTrainerDetailSuccess,
});
