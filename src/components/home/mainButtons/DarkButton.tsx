import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { windowWidth } from "../../../helpers/dimensions";

export default function DarkButton() {
  const [isPressed, setIsPressed] = useState(false);

  let buttonPressedStyles = {};
  let textPressedStyles = {};

  let buttonStyle = {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "transparent",
  };
  let textStyle = {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  };

  buttonPressedStyles = isPressed
    ? { borderColor: "black", borderWidth: 1, backgroundColor: "white" }
    : {};

  textPressedStyles = isPressed ? { color: "black" } : {};

  const onPress = () => {
    console.log("clicked");
  };

  return (
    <Pressable
      style={{
        ...buttonStyle,
        ...buttonPressedStyles,
      }}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text
        style={{
          ...textStyle,
          ...textPressedStyles,
        }}
      >
        Dark
      </Text>
    </Pressable>
  );
}
