import React, { useEffect } from "react";
import HomeScreen from "../components/home/HomeScreen";
import {
  userData,
  logout,
  userSetNotificationId,
} from "../redux/reducers/userSlice";
import { cmsData } from "../redux/reducers/cmsSlice";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

export default function HomeContainer(props: any) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userData = useAppSelector(userData);
  const _cmsData = useAppSelector(cmsData);

  const { token } = _userData;

  useEffect(() => {
    if (!token) {
      navigation.navigate("Login");
    } else {
      dispatch(userSetNotificationId());
    }
  }, [token]);
  return (
    <HomeScreen cmsData={_cmsData.data} logout={() => dispatch(logout())} />
  );
}
