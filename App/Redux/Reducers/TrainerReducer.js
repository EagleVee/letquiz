import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { TrainerTypes } from "Redux/Actions/TrainerActions";
import TransformHelper from "../../Utils/TransformHelper";
import TrainerTransform from "../../Transforms/TrainerTransform";
import { SUBSCRIPTION_STATUS_ACTIVE } from "../../Config/Subscription";
import TrainerSubscriptionTransform from "../../Transforms/TrainerSubscriptionTransform";

export const INITIAL_STATE = Immutable({
  featuredTrainers: [],
  trainerSubscriptions: [],
  subscribedTrainers: [],
  subscribedTrainerIds: [],
});

export const getFeaturedTrainersSuccess = (state, action) => {
  const responseTrainers = action.response.data
    ? action.response.data.map(e => e.trainer)
    : [];
  const transformedTrainers = TransformHelper.transformData(
    responseTrainers,
    TrainerTransform,
  );
  return state.merge({
    featuredTrainers: transformedTrainers,
  });
};

export const getSubscribedTrainersSuccess = (state, action) => {
  const ids = [];
  const transformedSubscriptions = TransformHelper.transformData(
    action.response.data,
    TrainerSubscriptionTransform,
    true,
  );

  const transformedSubscribedTrainers = transformedSubscriptions.map(e => {
    if (
      e.trainer_id &&
      e.subscription_status &&
      e.subscription_status === SUBSCRIPTION_STATUS_ACTIVE
    ) {
      ids.push(e.trainer_id);
      return e.transformedTrainer;
    }
  });

  return state.merge({
    trainerSubscriptions: transformedSubscriptions,
    subscribedTrainerIds: ids,
    subscribedTrainers: transformedSubscribedTrainers,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [TrainerTypes.GET_FEATURED_TRAINERS_SUCCESS]: getFeaturedTrainersSuccess,
  [TrainerTypes.GET_SUBSCRIBED_TRAINERS_SUCCESS]: getSubscribedTrainersSuccess,
});
