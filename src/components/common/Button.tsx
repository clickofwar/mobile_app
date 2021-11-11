import React, { useState } from "react";
import { Pressable, Text } from "react-native";

interface props {
  title: string;
  onPress: any;
  isSecondary?: boolean;
  isText?: boolean;
  buttonStyle?: object;
  textStyle?: object;
}

export default function Button(props: props) {
  const {
    title,
    onPress,
    isSecondary = false,
    isText = false,
    buttonStyle = {},
    textStyle = {},
  } = props;

  if (isText) {
    return (
      <Pressable style={[textStyles.button, buttonStyle]} onPress={onPress}>
        {({ pressed }) => (
          <Text
            style={[
              { color: pressed ? "#e3e3e3" : "black" },
              textStyles.text,
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </Pressable>
    );
  }

  if (isSecondary) {
    return (
      <Pressable
        style={({ pressed }) => [
          secondaryStyles.button,
          buttonStyle,
          {
            backgroundColor: pressed ? "#e3e3e3" : "white",
          },
        ]}
        onPress={onPress}
      >
        <Text style={[secondaryStyles.text, textStyle]}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      style={({ pressed }) => [
        primaryStyles.button,
        buttonStyle,
        {
          borderColor: pressed ? "black" : "transparent",
          backgroundColor: pressed ? "white" : "black",
        },
      ]}
      onPress={onPress}
    >
      {({ pressed }) => (
        <Text
          style={[
            primaryStyles.text,
            textStyle,
            {
              color: pressed ? "black" : "white",
            },
          ]}
        >
          {title}
        </Text>
      )}
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
