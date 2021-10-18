import React, { useEffect } from "react";
import SignupScreen from "../components/signup/SignupScreen";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  userSignupData,
  userData,
  userSignup,
} from "../redux/reducers/userSlice";
import Loading from "../components/common/Loading";

export default function SignupContainer(props: any) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userData = useAppSelector(userData);
  const _userSignupData = useAppSelector(userSignupData);

  const { token } = _userData;
  const { isLoading } = _userSignupData;

  useEffect(() => {
    if (token) {
      navigation.navigate("Home");
    }
  }, [token]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SignupScreen
      callback={(e: any) => dispatch(userSignup(e))}
      userSignupData={_userSignupData}
      {...props}
    />
  );
}
