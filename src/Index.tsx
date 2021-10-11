import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { fetchChuckNorris, routeData } from "./redux/reducers/routeSlice";

export default function Index() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(routeData);

  useEffect(() => {}, [data]);

  useEffect(() => {
    const data = "string";
    dispatch(fetchChuckNorris({ data }));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
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
