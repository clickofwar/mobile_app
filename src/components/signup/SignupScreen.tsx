import React from "react";
import { Button, Text } from "react-native";
import { CenterView } from "../common/Views";
import Form from "../common/Form";

export default function SignupScreen(props: any) {
  const { callback } = props;
  return (
    <CenterView>
      <Text>Signup Screen</Text>
      <Form callback={callback} />
      <Button title="Sign-up" onPress={() => console.log("hello")} />
    </CenterView>
  );
}
