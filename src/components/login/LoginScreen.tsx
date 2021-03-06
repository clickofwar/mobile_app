import React from "react";
import { Text, KeyboardAvoidingView, Platform } from "react-native";
import LoginForm from "../common/Forms/LoginForm";
import Button from "../common/Button";

interface props {
  callback: any;
  navigation: any;
  userLoginData: any;
}

export default function LoginScreen(props: props) {
  const { callback, navigation, userLoginData } = props;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text
        style={{
          fontSize: 16,
          lineHeight: 21,
          fontWeight: "bold",
          letterSpacing: 0.25,
        }}
      >
        Login Screen
      </Text>
      {userLoginData?.error && (
        <Text style={{ marginTop: 10 }}>Wrong Email or Password</Text>
      )}
      <LoginForm callback={callback} />
      <Button
        title="Sign-up"
        onPress={() => navigation.navigate("Signup")}
        buttonStyle={{ marginTop: 25 }}
        isSecondary={true}
      />
      <Button
        title="Forget Password"
        onPress={() => navigation.navigate("Password")}
        buttonStyle={{ marginTop: 25 }}
        isText={true}
      />
    </KeyboardAvoidingView>
  );
}
