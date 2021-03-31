import React from "react";
import AppNavigation from "./App/Navigation/AppNavigation";
import CodePush from "react-native-code-push";
import { Provider as AntProvider } from "@ant-design/react-native";
import { Provider } from "react-redux";
import createStore from "./App/Redux";
import AppModalProvider from "./App/Providers/ModalProvider";
import { Portal } from "react-native-paper";
// import { getApplicationHashKey } from "react-native-zalo-kit";

const store = createStore();

// const getKey = async () => {
//   try {
//     const key = await getApplicationHashKey();
//     console.log(key);
//   } catch (error) {
//     console.log(error);
//   }
// };

function App() {
  // getKey();
  return (
    <Provider store={store}>
      <Portal.Host>
        <AntProvider>
          <AppModalProvider>
            <AppNavigation />
          </AppModalProvider>
        </AntProvider>
      </Portal.Host>
    </Provider>
  );
}

export default CodePush(App);
