import React from "react";
import { View } from "react-native";

export function CenterView(props: any) {
  const { children, style } = props;
  return (
    <View
      {...props}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </View>
  );
}

export function AlignView(props: any) {
  const { children, style } = props;
  return (
    <View
      {...props}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        ...style,
      }}
    >
      {children}
    </View>
  );
}
