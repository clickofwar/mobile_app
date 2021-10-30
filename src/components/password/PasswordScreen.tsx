import React, { useEffect, useState } from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
import EmailForm from "../common/Forms/EmailForm";
import Loading from "../common/Loading";
import Button from "../common/Button";
import { CenterView } from "../common/Views";
import CodeForm from "../common/Forms/CodeForm";
import PasswordForm from "../common/Forms/PasswordForm";

export default function PasswordScreen(props: any) {
  const {
    reset,
    emailData,
    sendEmail,
    navigation,
    codeData,
    checkCode,
    updatePassword,
    passwordData,
  } = props;
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    console.log(passwordData);
  }, [passwordData]);

  const submitEmail = (e: any) => {
    console.log(e);
    sendEmail(e);
    setEmail(e.email);
  };

  const submitCode = (e: any) => {
    console.log({ email, code: e.code });
    checkCode({ email, code: e.code });
    setCode(e.code);
  };

  const submitPassword = (e: any) => {
    console.log(e);
    updatePassword({ password: e.password, code, email });
  };

  if (emailData?.emailSending) {
    return <Loading title="Sending Email" />;
  }
  if (codeData?.codeSending) {
    return <Loading title="Sending Code" />;
  }
  if (passwordData?.passwordSending) {
    return <Loading title="Updating Password" />;
  }

  if (
    emailData?.emailError ||
    codeData?.codeError ||
    passwordData?.passwordError
  ) {
    return (
      <CenterView>
        <Text>An error occured, please try again</Text>
        <Button
          isSecondary={true}
          title="back"
          onPress={() => navigation.navigate("Login")}
          buttonStyle={{ marginTop: 15 }}
        />
      </CenterView>
    );
  }

  if (emailData?.emailValid && email && codeData?.codeValid && code) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <PasswordForm callback={(e: any) => submitPassword(e)} />
        <Button
          isSecondary={true}
          title="back"
          onPress={() => navigation.navigate("Login")}
          buttonStyle={{ marginTop: 15 }}
        />
      </KeyboardAvoidingView>
    );
  }

  if (emailData?.emailValid && email) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <CodeForm callback={(e: any) => submitCode(e)} />
        <Button
          isSecondary={true}
          title="back"
          onPress={() => navigation.navigate("Login")}
          buttonStyle={{ marginTop: 15 }}
        />
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <EmailForm callback={submitEmail} />
      <Button
        isSecondary={true}
        title="back"
        onPress={() => navigation.navigate("Login")}
        buttonStyle={{ marginTop: 15 }}
      />
    </KeyboardAvoidingView>
  );
}
