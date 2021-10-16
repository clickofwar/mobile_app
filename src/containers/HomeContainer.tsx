import React, { useEffect } from "react";
import HomeScreen from "../components/home/HomeScreen";
import { userData, logout } from "../redux/reducers/userSlice";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

export default function HomeContainer(props: any) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userData = useAppSelector(userData);

  const { token } = _userData;

  useEffect(() => {
    if (!token) {
      navigation.navigate("Login");
    }
  }, [token]);
  return <HomeScreen logout={() => dispatch(logout())} />;
}
