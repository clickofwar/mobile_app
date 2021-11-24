import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/common/Button";
import { CenterView } from "../../components/common/Views";

export default function TeamScreen(props: any) {
  const { navigation, userSetTeam } = props;

  return (
    <CenterView>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Choose a Team</Text>
      <Button
        title="Dark"
        onPress={() => userSetTeam({ team: "dark" })}
        buttonStyle={{ marginTop: 10 }}
      />
      <Button
        title="Light"
        onPress={() => userSetTeam({ team: "light" })}
        isSecondary={true}
        buttonStyle={{ marginTop: 10 }}
      />
    </CenterView>
  );
}
