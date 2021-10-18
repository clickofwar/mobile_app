import React from "react";
import { ActivityIndicator } from "react-native";
import { CenterView } from "./Views";

export default function Loading() {
  return (
    <CenterView>
      <ActivityIndicator size="large" />
    </CenterView>
  );
}
