import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getDevices: [],
  getDevicesSuccess: ["response"],
  changeTheme: ["theme"],
  changeLanguage: ["language"],
});

export const DeviceTypes = Types;

export default Creators;
