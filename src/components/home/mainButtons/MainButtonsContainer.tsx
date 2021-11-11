import React, { useState } from "react";
import { CenterView } from "../../common/Views";
import MainButtons from "./MainButtons";
import { Text } from "react-native";

export default function MainButtonsContainer(props: any) {
  const { liveScore, setLiveScore, callback, submittedScore } = props;

  return (
    <CenterView style={{ flex: "none" }}>
      <Text>Submit Score: {submittedScore}</Text>
      <Text>Live Score: {liveScore}</Text>
      <MainButtons
        liveScore={liveScore}
        setLiveScore={setLiveScore}
        callback={callback}
      />
    </CenterView>
  );
}
