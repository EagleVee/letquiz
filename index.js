/**
 * @format
 */

import { AppRegistry, LogBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import CodePush from "react-native-code-push";

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

LogBox.ignoreLogs([
  "Warning: componentWillMount",
  "Warning: componentWillReceiveProps",
  "Module RCTImageLoader",
  "Remote debugger",
  "VirtualizedLists",
  "Non-serializable values were found in the navigation state",
]);

AppRegistry.registerComponent(appName, () => CodePush(codePushOptions)(App));
// AppRegistry.runApplication(appName, {
//   rootTag: document.getElementById("root"),
// });
