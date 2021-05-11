import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getLanguages: [],
  getLanguagesSuccess: ["response"],
});

export const ContentTypes = Types;

export default Creators;
