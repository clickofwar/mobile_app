import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import { windowWidth } from "../../helpers/dimensions";

export default function ShopAnimate(props: any) {
  const { isOpened, closeShop, children } = props;
  const animTranslateX: any = useRef(
    new Animated.Value(-1 * windowWidth)
  ).current;
  const animOpacity: any = useRef(new Animated.Value(0)).current;

  const close = () => {
    closeAnim();
    setTimeout(() => closeShop(), 300);
  };

  const closeAnim = () => {
    Animated.parallel([
      Animated.timing(animTranslateX, {
        toValue: -1 * windowWidth,
        duration: 250,
        useNativeDriver: true, // Add This line
      }),
      Animated.timing(animOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true, // Add This line
      }),
    ]).start();
  };

  const openAnim = () => {
    Animated.parallel([
      Animated.timing(animTranslateX, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true, // Add This line
      }),
      Animated.timing(animOpacity, {
        toValue: 0.9,
        duration: 250,
        useNativeDriver: true, // Add This line
      }),
    ]).start();
  };

  useEffect(() => {
    if (isOpened) {
      openAnim();
    } else {
      close();
    }
  }, [isOpened]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: "black",
            opacity: animOpacity,
          },
        ]}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => close()}
        ></TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.view,
          {
            transform: [{ translateX: animTranslateX }],
            width: windowWidth - 50,
          },
        ]}
      >
        {children}
      </Animated.View>
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
  },
  view: {
    height: "100%",
    backgroundColor: "white",
  },
});
