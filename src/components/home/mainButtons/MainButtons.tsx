import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import DarkButton from "./DarkButton";
import LightButton from "./LightButton";

export default function MainButtons() {
  let styleView = {
    alignItems: "center",
    flexDirection: "row",
  };

  return (
    <View style={styleView}>
      <DarkButton />
      <LightButton />
    </View>
  );
}
