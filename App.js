import React from "react";
import AppNavigation from "Navigation/AppNavigation";
import { Provider } from "react-redux";
import createStore from "Redux";
import AppModalProvider from "Providers/ModalProvider";
import { Portal } from "react-native-paper";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Portal.Host>
        <AppModalProvider>
          <AppNavigation />
        </AppModalProvider>
      </Portal.Host>
    </Provider>
  );
}

export default App;
