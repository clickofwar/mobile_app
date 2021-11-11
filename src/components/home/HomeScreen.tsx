import React, { useState } from "react";
import { Text, View } from "react-native";
import { CenterView } from "../common/Views";
import Button from "../common/Button";
import MainButtonsContainer from "./mainButtons/MainButtonsContainer";

interface props {
  logout: () => {};
  navigation: any;
  cmsData: any;
  username: any;
}

export default function HomeScreen(props: props) {
  const { logout, navigation, cmsData, username } = props;
  const [liveScore, setLiveScore] = useState(0);
  const [submittedScore, setSubmittedScore] = useState(0);

  const submitScore = (score: number) => {
    console.log(`${score} has been submitted`);
    setSubmittedScore(score);
  };

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

      <MainButtonsContainer
        liveScore={liveScore}
        setLiveScore={setLiveScore}
        callback={submitScore}
        submittedScore={submittedScore}
      />

      <Button
        title="Logout"
        isSecondary={true}
        onPress={logout}
        buttonStyle={{ marginTop: 20 }}
      />
    </CenterView>
  );
}
