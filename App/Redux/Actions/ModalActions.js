import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  setCreateActionModalVisible: ["visible"],
});

export const ModalTypes = Types;

export default Creators;
