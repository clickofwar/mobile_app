import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { windowHeight, windowWidth } from "../../../helpers/dimensions";
import { close } from "../../../redux/reducers/modalSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import Button from "../Button";

interface props {
  callback: () => any;
  image?: string;
  title: string;
  description: string;
  backgroundColor?: string;
  primaryButton?: primaryButton;
  secondaryButton?: secondaryButton;
}

interface primaryButton {
  title: string;
  callback: () => any;
}

interface secondaryButton {
  title: string;
  callback: () => any;
}

export default function FullScreenModal(props: props) {
  const dispatch = useAppDispatch();
  const {
    image = "",
    title = "",
    description = "",
    backgroundColor = "",
    primaryButton,
    secondaryButton,
  } = props;

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.view,
          {
            backgroundColor: backgroundColor ? backgroundColor : "white",
          },
        ]}
      >
        {image !== "" && (
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
        {primaryButton && (
          <Button
            onPress={() => dispatch(primaryButton.callback)}
            title={primaryButton.title}
          />
        )}
        {secondaryButton ? (
          <Button
            onPress={() => dispatch(secondaryButton.callback)}
            isSecondary={true}
            title={secondaryButton.title}
            buttonStyle={{ margin: 5 }}
          />
        ) : (
          <Button
            title="Close"
            isSecondary={true}
            onPress={() => dispatch(close())}
            buttonStyle={{ margin: 5 }}
          />
        )}
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
