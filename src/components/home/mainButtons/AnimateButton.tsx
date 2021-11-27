import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

export default function AnimateButton(props: any) {
  const { children, liveScore, cmsAnimate } = props;

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (liveScore) {
      scaling();
    }
  }, [liveScore]);

  const scaling = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: cmsAnimate?.animateMainButtons?.scaleSize || 1.1,
        duration: cmsAnimate?.animateMainButtons?.scaleDelay || 20,
        useNativeDriver: true, // Add This line
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: cmsAnimate?.animateMainButtons?.scaleDelay || 20,
        useNativeDriver: true, // Add This line
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
