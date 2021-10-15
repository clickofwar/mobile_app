import React, { useState, useRef } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function Input(props: any) {
  const {
    onChangeText,
    onBlur,
    placeholder,
    value,
    error,
    label,
    secureTextEntry = false,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(e: any) {
    setIsFocused(true);
  }
  function handleFocusOut(e: any) {
    onBlur(e);
    setIsFocused(false);
  }

  const focusStyle = isFocused ? { borderColor: "black", borderWidth: 1 } : {};

  return (
    <>
      <Text style={{ marginTop: 10, marginBottom: 3 }}>{label}</Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleFocusOut}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        style={{ ...styles.container, ...focusStyle }}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </>
  );
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    width: 350,
    height: 50,
    borderRadius: 3,
  },
};
