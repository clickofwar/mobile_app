import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import Index from "./src/Index";

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
