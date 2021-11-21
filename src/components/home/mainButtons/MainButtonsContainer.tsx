import React, { useState, useEffect } from "react";
import { CenterView } from "../../common/Views";
import MainButtons from "./MainButtons";
import { Text } from "react-native";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { cmsScore } from "../../../redux/reducers/cmsSlice";
import {
  sendStreamScore,
  updateLiveScore,
  sendUpdatedScore,
  getUpdatedScore,
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
        if (delta) {
          dispatch(sendStreamScore({ score: delta }));
        }
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

  //Update Score
  useEffect(() => {
    updateScore(0);
    const interval = setInterval(function () {
      updateScore(0);
    }, _cmsScore?.score?.frequency || 5000);

    return () => clearInterval(interval);
  }, []);

  const updateScore = (score: any) => {
    if (score) {
      console.log(`${score} has been submitted`);
      dispatch(sendUpdatedScore({ score }));
      setSubmittedScore(score);
    } else {
      console.log(`${score} has been reloaded`);
      dispatch(getUpdatedScore());
    }
  };

  return (
    <CenterView style={{ flex: "none" }}>
      <Text>Submit Score: {submittedScore}</Text>
      <MainButtons
        liveScore={liveScore}
        setLiveScore={setLiveScore}
        callback={updateScore}
        cmsScore={_cmsScore}
      />
    </CenterView>
  );
}
