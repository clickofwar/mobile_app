import React, { useState } from "react";
import { Text, View } from "react-native";
import { AlignView, CenterView } from "../common/Views";
import Button from "../common/Button";
import MainButtonsContainer from "./mainButtons/MainButtonsContainer";
import { useAppDispatch } from "../../hooks/hooks";
import { update, close } from "../../redux/reducers/modalSlice";

interface props {
  navigation: any;
  cmsData: any;
  username: any;
  liveScore: number;
  score: number;
  liveStreamScore: number;
}

export default function HomeScreen(props: props) {
  const { navigation, cmsData, username, liveScore, score, liveStreamScore } =
    props;

  return (
    <CenterView style={{ justifyContent: "space-around" }}>
      <View>
        {cmsData.homeTitle && (
          <Text
            style={{
              fontSize: 25,
              lineHeight: 100,
              letterSpacing: 0.25,
            }}
          >
            {cmsData.homeTitle}
          </Text>
        )}
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            letterSpacing: 0.25,
            textAlign: "center",
          }}
        >
          {username}
        </Text>
      </View>

      <View>
        <AlignView>
          <Text>Live Stream Score: {liveStreamScore}</Text>
        </AlignView>
        <AlignView>
          <Text>Score: {score}</Text>
        </AlignView>
        <AlignView style={{ marginTop: 20 }}>
          <Text>My Clicking Score: {liveScore}</Text>
        </AlignView>
      </View>

      <MainButtonsContainer />

      <Button
        title="Settings"
        isSecondary={true}
        onPress={() => navigation.navigate("Settings")}
        buttonStyle={{ marginTop: 20 }}
      />
    </CenterView>
  );
}
