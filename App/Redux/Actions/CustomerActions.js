import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getCustomer: [],
  updateCustomer: ["customer"],
  removeCustomer: [],
});

export const CustomerTypes = Types;

export default Creators;
