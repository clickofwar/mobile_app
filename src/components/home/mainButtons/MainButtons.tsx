import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import DarkButton from "./DarkButton";
import LightButton from "./LightButton";

var latestTimeOutside = 0;
var liveScoreOutside = 0;
export default function MainButtons(props: any) {
  const { setLiveScore, callback, cmsScore, team } = props;

  const clickScore = (type: number) => {
    let date = new Date();
    let currentTime = date.getTime();
    latestTimeOutside = currentTime;

    setLiveScore((prev: any) => prev + type);
    liveScoreOutside = liveScoreOutside + type;

    setTimeout(() => {
      let date2 = new Date();
      let newTime = date2.getTime();
      if (checkTimeDiff(newTime) && liveScoreOutside) {
        callback(liveScoreOutside);
        setLiveScore(0);
        liveScoreOutside = 0;
      }
    }, cmsScore?.score?.liveScore?.delayTime || 1500);
  };

  const checkTimeDiff = (newTime: any) => {
    let diff = (newTime - latestTimeOutside) / 1000;
    return diff > (cmsScore?.score?.liveScore?.delayTime || 1500) / 1000 - 1.2;
  };

  return (
    <View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {team === "dark" ? <DarkButton callback={clickScore} /> : null}
        {team === "light" ? <LightButton callback={clickScore} /> : null}
      </View>
    </View>
  );
}
