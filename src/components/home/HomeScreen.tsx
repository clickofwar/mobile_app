import React from "react";
import { Text } from "react-native";
import { CenterView } from "../common/Views";
import Button from "../common/Button";

export default function HomeScreen(props: any) {
  const { logout, navigation, cmsData } = props;
  return (
    <CenterView>
      {cmsData.homeTitle && (
        <Text
          style={{
            fontSize: 25,
            lineHeight: 100,
            fontWeight: "bold",
            letterSpacing: 0.25,
          }}
        >
          {cmsData.homeTitle}
        </Text>
      )}
      <Text
        style={{
          fontSize: 16,
          lineHeight: 21,
          fontWeight: "bold",
          letterSpacing: 0.25,
        }}
      >
        Home Screen
      </Text>
      <Button
        title="Logout"
        isSecondary={true}
        onPress={logout}
        buttonStyle={{ marginTop: 20 }}
      />
    </CenterView>
  );
}
