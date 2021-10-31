import * as Amplitude from "expo-analytics-amplitude";
import { Platform } from "react-native";
import { AMPLITUDE_KEY } from "@env";

interface action {
  type: any;
  payload: any;
}

export const amplitudeEvent = (action: action) => {
  if (Platform.OS !== "web") {
    record(action);
  }
};

async function record(action: action) {
  await Amplitude.initializeAsync(AMPLITUDE_KEY);

  if (
    action.type === "user/login/fulfilled" ||
    action.type === "user/signup/fulfilled"
  ) {
    await Amplitude.setUserIdAsync(action.payload.data.email);
  }
  await Amplitude.logEventAsync(action.type);
}

export async function amplitudeTimeEvent(props: any) {
  const { type, time } = props;

  if (Platform.OS !== "web") {
    await Amplitude.initializeAsync(AMPLITUDE_KEY);
    await Amplitude.logEventWithPropertiesAsync(type, { time });
  }
}
