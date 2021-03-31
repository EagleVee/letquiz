import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { SessionTypes } from "Redux/Actions/SessionActions";

export const INITIAL_STATE = Immutable({
  something: "",
});

export const reducer = createReducer(INITIAL_STATE, {});
