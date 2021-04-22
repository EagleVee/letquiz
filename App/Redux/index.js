import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "Sagas";

import { reducer as AuthReducer } from "./Reducers/AuthReducer";
import { reducer as DeviceReducer } from "./Reducers/DeviceReducer";
import { reducer as CustomerReducer } from "./Reducers/CustomerReducer";
import { reducer as ContentReducer } from "./Reducers/ContentReducer";
import { reducer as StudySetReducer } from "./Reducers/StudySetReducer";

export const reducers = combineReducers({
  auth: AuthReducer,
  device: DeviceReducer,
  customer: CustomerReducer,
  content: ContentReducer,
  studySet: StudySetReducer,
});

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(
    reducers,
    rootSaga,
  );

  return store;
};
