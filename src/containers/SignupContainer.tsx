import React, { useEffect } from "react";
import SignupScreen from "../components/signup/SignupScreen";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  userSignupData,
  userData,
  userSignup,
} from "../redux/reducers/userSlice";
import Loading from "../components/common/Loading";

interface props {
  navigation: any;
}

interface callbackProps {
  email: string;
  password: string;
  username: string;
}

export default function SignupContainer(props: props) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userData = useAppSelector(userData);
  const _userSignupData = useAppSelector(userSignupData);

  const { token } = _userData;

  useEffect(() => {
    if (token) {
      navigation.navigate("Home");
    }
  }, [token]);

  if (_userSignupData?.isLoading) {
    return <Loading title="Signing in..." />;
  }

  return (
    <SignupScreen
      callback={(e: callbackProps) => dispatch(userSignup(e))}
      userSignupData={_userSignupData}
      {...props}
    />
  );
}
