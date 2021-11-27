import React, { useState, useEffect, useRef } from "react";
import { CenterView } from "../../common/Views";
import MainButtons from "./MainButtons";
import { Text } from "react-native";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { cmsScore, cmsAnimate } from "../../../redux/reducers/cmsSlice";
import { userData } from "../../../redux/reducers/userSlice";

import {
  sendStreamScore,
  updateLiveScore,
  sendUpdatedScore,
  getUpdatedScore,
} from "../../../redux/reducers/scoreSlice";
import AnimateButton from "./AnimateButton";

let liveScoreOutside = 0;
let prevScoreOutside = 0;

export default function MainButtonsContainer(props: any) {
  const dispatch = useAppDispatch();
  const _cmsScore = useAppSelector(cmsScore);
  const _userData = useAppSelector(userData);
  const _cmsAnimate = useAppSelector(cmsAnimate);
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
      <AnimateButton liveScore={liveScore} cmsAnimate={_cmsAnimate}>
        <MainButtons
          liveScore={liveScore}
          setLiveScore={setLiveScore}
          callback={updateScore}
          cmsScore={_cmsScore}
          team={_userData?.team}
        />
      </AnimateButton>
    </CenterView>
  );
}
