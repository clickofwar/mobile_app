import React, { useEffect } from "react";
import HomeScreen from "../components/home/HomeScreen";
import { userData, logout } from "../redux/reducers/userSlice";
import { cmsData } from "../redux/reducers/cmsSlice";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

export default function HomeContainer(props: any) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userData = useAppSelector(userData);
  const _cmsData = useAppSelector(cmsData);

  console.log(_cmsData);
  const { token } = _userData;

  useEffect(() => {
    if (!token) {
      navigation.navigate("Login");
    }
  }, [token]);
  return (
    <HomeScreen cmsData={_cmsData.data} logout={() => dispatch(logout())} />
  );
}
