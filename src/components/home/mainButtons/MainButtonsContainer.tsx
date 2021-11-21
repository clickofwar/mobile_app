import React, { useState, useEffect } from "react";
import { CenterView } from "../../common/Views";
import MainButtons from "./MainButtons";
import { Text } from "react-native";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { cmsScore } from "../../../redux/reducers/cmsSlice";
import {
  sendStreamScore,
  updateLiveScore,
} from "../../../redux/reducers/scoreSlice";

let liveScoreOutside = 0;
let prevScoreOutside = 0;

export default function MainButtonsContainer(props: any) {
  const dispatch = useAppDispatch();
  const _cmsScore = useAppSelector(cmsScore);
  const [liveScore, setLiveScore] = useState(0);
  const [submittedScore, setSubmittedScore] = useState(0);

  // Send Live Score update
  useEffect(() => {
    const interval = setInterval(function () {
      if (liveScoreOutside) {
        let delta = liveScoreOutside - prevScoreOutside;
        prevScoreOutside = liveScoreOutside;
        dispatch(sendStreamScore({ score: delta }));
      }
    }, _cmsScore?.score?.liveScore?.frequency || 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    liveScoreOutside = liveScore;
    if (liveScore === 0) {
      prevScoreOutside = 0;
    }
  }, [liveScore]);

  //Update liveScore reducer value
  useEffect(() => {
    dispatch(updateLiveScore(liveScore));
  }, [liveScore]);

  //Submit final score
  const submitScore = (score: number) => {
    console.log(`${score} has been submitted`);
    setSubmittedScore(score);
  };

  return (
    <CenterView style={{ flex: "none" }}>
      <Text>Submit Score: {submittedScore}</Text>
      <MainButtons
        liveScore={liveScore}
        setLiveScore={setLiveScore}
        callback={submitScore}
        cmsScore={_cmsScore}
      />
    </CenterView>
  );
}
