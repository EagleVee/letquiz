import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getFaqs: [],
  getFaqsSuccess: ["response"],
});

export const ContentTypes = Types;

export default Creators;
