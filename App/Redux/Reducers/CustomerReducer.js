import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { CustomerTypes } from "Redux/Actions/CustomerActions";
import CustomerTransform from "../../Transforms/CustomerTransform";

export const INITIAL_STATE = Immutable(new CustomerTransform());

export const updateCustomer = (state, action) => {
  const { customer } = action;
  const customerTransform = new CustomerTransform(customer);
  return state.merge({
    ...customerTransform,
  });
};

export const removeCustomer = (state, action) => {
  return INITIAL_STATE;
};

export const reducer = createReducer(INITIAL_STATE, {
  [CustomerTypes.UPDATE_CUSTOMER]: updateCustomer,
  [CustomerTypes.REMOVE_CUSTOMER]: removeCustomer,
});
