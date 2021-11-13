import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { windowHeight, windowWidth } from "../../../helpers/dimensions";
import Button from "../Button";

interface props {
  callback: () => any;
  image?: string;
  title: string;
  description: string;
  backgroundColor?: string;
}

export default function PopupModal(props: props) {
  const {
    callback,
    image = "",
    title = "",
    description = "",
    backgroundColor = "",
  } = props;
  return (
    <View style={[styles.container, { paddingBottom: windowHeight * 0.2 }]}>
      <View
        style={[
          styles.view,
          {
            backgroundColor: backgroundColor ? backgroundColor : "white",
          },
        ]}
      >
        {image && (
          <Image
            style={{
              height: windowWidth * 0.5,
              width: windowWidth * 0.5,
              padding: 10,
            }}
            source={{
              uri: image,
            }}
          />
        )}
        {title && <Text style={styles.title}>{title}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <View
        style={{
          height: windowHeight * 0.2,
          justifyContent: "center",
        }}
      >
        <Button
          onPress={() => callback()}
          title="DISMISS"
          isText={true}
          buttonStyle={{ height: 40 }}
          textStyle={{ color: "white", fontSize: 22 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .8)",
    padding: 15,
    paddingTop: 50,
  },
  view: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    backgroundColor: "white",
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 22,
    padding: 10,
    textAlign: "center",
  },
});
