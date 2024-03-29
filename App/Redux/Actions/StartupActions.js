import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: ["callback"],
});

export const StartupTypes = Types;
export default Creators;
