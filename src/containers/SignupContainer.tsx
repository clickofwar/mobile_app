import React from "react";
import { View, Text } from "react-native";
import SignupScreen from "../components/signup/SignupScreen";

export default function SignupContainer() {
  return <SignupScreen callback={(e: any) => console.log(e)} />;
}
