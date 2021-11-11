import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import DarkButton from "./DarkButton";
import LightButton from "./LightButton";

var latestTime = 0;
var liveScore2 = 0;
export default function MainButtons(props: any) {
  const { liveScore, setLiveScore, callback } = props;
  let styleView = {
    alignItems: "center",
    flexDirection: "row",
  };

  const clickScore = (type: number) => {
    let date = new Date();
    let currentTime = date.getTime();
    latestTime = currentTime;

    setLiveScore((prev: any) => prev + type);
    liveScore2 = liveScore2 + type;

    setTimeout(() => {
      let date2 = new Date();
      let newTime = date2.getTime();
      if (checkTimeDiff(newTime) && liveScore2) {
        callback(liveScore2);
        setLiveScore(0);
        liveScore2 = 0;
      }
    }, 1500);
  };

  const checkTimeDiff = (newTime: any) => {
    let diff = (newTime - latestTime) / 1000;
    return diff > 1.2;
  };

  return (
    <View>
      <View style={styleView}>
        <DarkButton callback={clickScore} />
        <LightButton callback={clickScore} />
      </View>
    </View>
  );
}
