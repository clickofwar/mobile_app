import React from "react";
import { Text, KeyboardAvoidingView, Platform } from "react-native";
import SignupForm from "../common/Forms/SignupForm";
import Button from "../common/Button";

export default function SignupScreen(props: any) {
  const { callback, navigation, userSignupData } = props;
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
        Signup Screen
      </Text>
      {userSignupData.error && (
        <Text style={{ marginTop: 10 }}>
          Something went wrong, please try again
        </Text>
      )}
      <SignupForm callback={callback} />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        buttonStyle={{ marginTop: 25 }}
        isSecondary={true}
      />
    </KeyboardAvoidingView>
  );
}
