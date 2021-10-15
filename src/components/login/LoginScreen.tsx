import React from "react";
import { Text } from "react-native";
import { CenterView } from "../common/Views";
import Form from "../common/Form";
import Button from "../common/Button";
import { emailPassword } from "../../helpers/formValidation";

export default function LoginScreen(props: any) {
  const { callback } = props;
  return (
    <CenterView>
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
      <Form callback={callback} validate={emailPassword} />
      <Button
        title="Sign-up"
        onPress={() => console.log("hello")}
        buttonStyle={{ marginTop: 25 }}
        isSecondary={true}
      />
    </CenterView>
  );
}
