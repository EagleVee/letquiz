import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { CartTypes } from "Actions/CartActions";

export const INITIAL_STATE = Immutable({
  something: "",
});

export const doSomething = (state, action) => {
  return state.merge({
    something: "SOMETHING",
  });
};

export const reducer = createReducer(INITIAL_STATE, {});
