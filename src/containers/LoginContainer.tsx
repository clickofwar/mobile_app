import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { fetchChuckNorris, routeData } from "../redux/reducers/routeSlice";
import LoginScreen from "../components/login/LoginScreen";

export default function LoginContainer() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(routeData);

  // const stringy = "rege";

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

  // useEffect(() => {
  //   const data = "string";
  //   dispatch(fetchChuckNorris({ data }));
  // }, []);

  if (data.isLoading) {
    return <Text>Loading...</Text>;
  }

  return <LoginScreen callback={(e: any) => console.log(e)} />;
}
