import React from "react";
import { Pressable, Text } from "react-native";

export default function Button(props: any) {
  const { title, onPress, isSecondary, isText, buttonStyle, textStyle } = props;

  let buttonStyles = isSecondary
    ? secondaryStyles.button
    : primaryStyles.button;

  let textStyles = isSecondary ? secondaryStyles.text : primaryStyles.text;

  return (
    <Pressable style={{ ...buttonStyles, ...buttonStyle }} onPress={onPress}>
      <Text style={{ ...textStyles, ...textStyle }}>{title}</Text>
    </Pressable>
  );
}

const primaryStyles = {
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
};

const secondaryStyles = {
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
};
