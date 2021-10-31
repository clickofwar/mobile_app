import React, { useEffect } from "react";
import { View, Text } from "react-native";
import PasswordScreen from "../components/password/PasswordScreen";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  reset,
  passwordEmailData,
  passwordCodeData,
  passwordResetData,
  sendEmail,
  checkCode,
  updatePassword,
} from "../redux/reducers/passwordSlice";

interface props {
  navigation: props;
}

export default function PasswordContainer(props: props) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const emailData = useAppSelector(passwordEmailData);
  const codeData = useAppSelector(passwordCodeData);
  const passwordData = useAppSelector(passwordResetData);

  return (
    <PasswordScreen
      emailData={emailData}
      codeData={codeData}
      passwordData={passwordData}
      reset={() => dispatch(reset())}
      sendEmail={(e) => dispatch(sendEmail(e))}
      checkCode={(e) => dispatch(checkCode(e))}
      updatePassword={(e) => dispatch(updatePassword(e))}
      {...props}
    />
  );
}
