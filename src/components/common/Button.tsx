import React, { useState } from "react";
import { Pressable, Text } from "react-native";

export default function Button(props: any) {
  const { title, onPress, isSecondary, isText, buttonStyle, textStyle } = props;
  const [isPressed, setIsPressed] = useState(false);

  let buttonPressedStyles = {};
  let textPressedStyles = {};

  if (isText) {
    textPressedStyles = isPressed ? { color: "#e3e3e3" } : {};

    return (
      <Pressable
        style={{
          ...textStyles.button,
          ...buttonStyle,
          ...buttonPressedStyles,
        }}
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Text
          style={{
            ...textStyles.text,
            ...textStyle,
            ...textPressedStyles,
          }}
        >
          {title}
        </Text>
      </Pressable>
    );
  }

  if (isSecondary) {
    buttonPressedStyles = isPressed ? { backgroundColor: "#e3e3e3" } : {};

    return (
      <Pressable
        style={{
          ...secondaryStyles.button,
          ...buttonStyle,
          ...buttonPressedStyles,
        }}
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Text
          style={{
            ...secondaryStyles.text,
            ...textStyle,
            ...textPressedStyles,
          }}
        >
          {title}
        </Text>
      </Pressable>
    );
  }

  buttonPressedStyles = isPressed
    ? { borderColor: "black", borderWidth: 1, backgroundColor: "white" }
    : {};

  textPressedStyles = isPressed ? { color: "black" } : {};

  return (
    <Pressable
      style={{
        ...primaryStyles.button,
        ...buttonStyle,
        ...buttonPressedStyles,
      }}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text
        style={{ ...primaryStyles.text, ...textStyle, ...textPressedStyles }}
      >
        {title}
      </Text>
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
    borderWidth: 1,
    borderColor: "transparent",
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
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
};

const textStyles = {
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
};
