import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  userLoginData,
  userData,
  userLogin,
} from "../redux/reducers/userSlice";
import LoginScreen from "../components/login/LoginScreen";
import Loading from "../components/common/Loading";

export default function LoginContainer(props: any) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userData = useAppSelector(userData);
  const _userLoginData = useAppSelector(userLoginData);

  const { token } = _userData;
  const { isLoading } = _userLoginData;

  useEffect(() => {
    if (token) {
      navigation.navigate("Home");
    }
  }, [token]);

  if (isLoading) {
    return <Loading title="Logging In..." />;
  }

  return (
    <LoginScreen
      callback={(e: any) => dispatch(userLogin(e))}
      userLoginData={_userLoginData}
      {...props}
    />
  );
}
