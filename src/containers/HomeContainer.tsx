import React, { useEffect } from "react";
import HomeScreen from "../components/home/HomeScreen";
import {
  userData,
  logout,
  userSetNotificationId,
} from "../redux/reducers/userSlice";
import { cmsData } from "../redux/reducers/cmsSlice";
import { scoreData } from "../redux/reducers/scoreSlice";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

interface props {
  navigation: any;
}

export default function HomeContainer(props: props) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userData = useAppSelector(userData);
  const _cmsData = useAppSelector(cmsData);
  const _scoreData = useAppSelector(scoreData);

  const { token, username } = _userData;

  useEffect(() => {
    if (!token) {
      navigation.navigate("Login");
    } else {
      //Send latest push notification Id
      dispatch(userSetNotificationId());
    }
  }, [token]);

  return (
    <HomeScreen
      cmsData={_cmsData.data}
      navigation={navigation}
      username={username}
      liveScore={_scoreData.liveScore || 0}
      score={_scoreData.score || 0}
      liveStreamScore={_scoreData.liveStreamScore || 0}
    />
  );
}
