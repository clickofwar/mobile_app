import React, { useEffect, useState } from "react";
import { Text, Platform, KeyboardAvoidingView } from "react-native";
import EmailForm from "../common/Forms/EmailForm";
import Loading from "../common/Loading";
import Button from "../common/Button";
import { CenterView } from "../common/Views";
import CodeForm from "../common/Forms/CodeForm";
import PasswordForm from "../common/Forms/PasswordForm";

interface props {
  reset: () => {};
  navigation: any;
  emailData: any;
  codeData: any;
  passwordData: any;
  sendEmail: (e: emailArg) => {};
  checkCode: (e: codeArg) => {};
  updatePassword: (e: passwordArg) => {};
}

interface emailArg {
  email: string;
}

interface codeArg {
  email: string;
  code: string;
}

interface passwordArg {
  email: string;
  code: string;
  password: string;
}

export default function PasswordScreen(props: props) {
  const {
    reset,
    emailData,
    navigation,
    codeData,
    passwordData,
    sendEmail,
    checkCode,
    updatePassword,
  } = props;
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  //Reset all password state everytime
  useEffect(() => {
    reset();
  }, []);

  const submitEmail = (e: any) => {
    sendEmail(e);
    setEmail(e.email);
  };

  const submitCode = (e: any) => {
    checkCode({ email, code: e.code });
    setCode(e.code);
  };

  const submitPassword = (e: any) => {
    updatePassword({ password: e.password, code, email });
  };

  if (passwordData?.passwordValid) {
    navigation.navigate("Login");
  }

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
