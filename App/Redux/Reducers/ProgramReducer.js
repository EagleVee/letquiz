import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ProgramTypes } from "Redux/Actions/ProgramActions";
import TransformHelper from "Utils/TransformHelper";
import ProgramTransform from "Transforms/ProgramTransform";
import ProgramSubscriptionTransform from "../../Transforms/ProgramSubscriptionTransform";

export const INITIAL_STATE = Immutable({
  something: "",
  newPrograms: [],
  newProgramsPage: 0,
  programSubscriptions: [],
  subscribedPrograms: [],
  subscribedProgramIds: [0],
  subscribedProgramsPage: 0,
  trainerPrograms: {},
  trainerProgramsPage: {},
});

export const getNewProgramsSuccess = (state, action) => {
  const { data, page } = action.response;

  if (state.newProgramsPage < page) {
    const transformedData = TransformHelper.transformData(
      data,
      ProgramTransform,
    );
    return state.merge({
      newPrograms: [...state.newPrograms, ...transformedData],
      newProgramsPage: page,
    });
  } else {
    return state;
  }
};

export const getSubscribedProgramsSuccess = (state, action) => {
  const { data, page } = action.response;

  if (state.subscribedProgramsPage < page) {
    const ids = [];

    const transformedProgramSubscriptions = TransformHelper.transformData(
      data,
      ProgramSubscriptionTransform,
      true,
    );
    const transformedPrograms = transformedProgramSubscriptions.map(e => {
      if (e.program && e.program.id) {
        ids.push(e.program.id);
        return e.transformedProgram;
      }
    });
    return state.merge({
      subscribedPrograms: [...state.subscribedPrograms, ...transformedPrograms],
      programSubscriptions: [
        ...state.programSubscriptions,
        ...transformedProgramSubscriptions,
      ],
      subscribedProgramsPage: page,
      subscribedProgramIds: ids,
    });
  } else {
    return state;
  }
};

export const getTrainerProgramsSuccess = (state, action) => {
  const { response, trainerId } = action;
  const { data, page } = response;
  const currentTrainerProgramPage = state.trainerProgramsPage[trainerId] || 0;
  if (currentTrainerProgramPage < page) {
    const transformedData = TransformHelper.transformData(
      data,
      ProgramTransform,
    );

    return state.merge({
      trainerPrograms: {
        ...state.trainerPrograms,
        [trainerId]: transformedData,
      },
      trainerProgramsPage: {
        ...state.trainerProgramsPage,
        [trainerId]: page,
      },
    });
  } else {
    return state;
  }
};

export const reducer = createReducer(INITIAL_STATE, {
  [ProgramTypes.GET_NEW_PROGRAMS_SUCCESS]: getNewProgramsSuccess,
  [ProgramTypes.GET_SUBSCRIBED_PROGRAMS_SUCCESS]: getSubscribedProgramsSuccess,
  [ProgramTypes.GET_TRAINER_PROGRAMS_SUCCESS]: getTrainerProgramsSuccess,
});
