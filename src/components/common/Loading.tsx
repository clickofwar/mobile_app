import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { CenterView } from "./Views";

export default function Loading({ title = "" }) {
  return (
    <CenterView>
      <ActivityIndicator size="large" />
      <Text
        style={{
          fontSize: 16,
          lineHeight: 21,
          fontWeight: "bold",
          letterSpacing: 0.25,
        }}
      >
        {title}
      </Text>
    </CenterView>
  );
}
