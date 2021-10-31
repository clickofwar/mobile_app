import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { CenterView } from "./Views";

interface props {
  title?: string;
}

export default function Loading(props: props) {
  const { title } = props;
  return (
    <CenterView>
      <ActivityIndicator size="small" />
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
