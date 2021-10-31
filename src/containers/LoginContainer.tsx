import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  userLoginData,
  userData,
  userLogin,
} from "../redux/reducers/userSlice";
import LoginScreen from "../components/login/LoginScreen";
import Loading from "../components/common/Loading";

interface props {
  navigation: any;
}

interface callbackProps {
  email: string;
  password: string;
}

export default function LoginContainer(props: props) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userData = useAppSelector(userData);
  const _userLoginData = useAppSelector(userLoginData);

  const { token } = _userData;

  useEffect(() => {
    if (token) {
      navigation.navigate("Home");
    }
  }, [token]);

  if (_userLoginData?.isLoading) {
    return <Loading title="Logging In..." />;
  }

  return (
    <LoginScreen
      callback={(e: callbackProps) => dispatch(userLogin(e))}
      userLoginData={_userLoginData}
      {...props}
    />
  );
}
