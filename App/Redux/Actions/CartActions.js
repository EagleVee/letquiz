import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  doSomething: [],
});

export const CartTypes = Types;

export default Creators;
