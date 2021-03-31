import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "Sagas";

import { reducer as AuthReducer } from "./Reducers/AuthReducer";
import { reducer as ProgramReducer } from "./Reducers/ProgramReducer";
import { reducer as ProgramDetailReducer } from "./Reducers/ProgramDetailReducer";
import { reducer as DeviceReducer } from "./Reducers/DeviceReducer";
import { reducer as CustomerReducer } from "./Reducers/CustomerReducer";
import { reducer as TrainerReducer } from "./Reducers/TrainerReducer";
import { reducer as TrainerDetailReducer } from "./Reducers/TrainerDetailReducer";
import { reducer as SessionReducer } from "./Reducers/SessionReducer";
import { reducer as SessionDetailReducer } from "./Reducers/SessionDetailReducer";
import { reducer as ContentReducer } from "./Reducers/ContentReducer";

export const reducers = combineReducers({
  auth: AuthReducer,
  program: ProgramReducer,
  programDetail: ProgramDetailReducer,
  device: DeviceReducer,
  customer: CustomerReducer,
  trainer: TrainerReducer,
  trainerDetail: TrainerDetailReducer,
  session: SessionReducer,
  sessionDetail: SessionDetailReducer,
  content: ContentReducer,
});

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(
    reducers,
    rootSaga,
  );

  return store;
};
