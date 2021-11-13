//import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import * as Notifications from "expo-notifications";
import { LogBox } from "react-native";
import Index from "./src";

let persistor = persistStore(store);

export default function App() {
  const [data, setData] = useState("");
  LogBox.ignoreLogs([
    "Warning: AsyncStorage has been extracted from react-native core and will be removed in",
  ]);
  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  React.useEffect(() => {
    //console.log({ lastNotificationResponse });
    setData(JSON.stringify({ lastNotificationResponse }));
  }, [lastNotificationResponse]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
}
