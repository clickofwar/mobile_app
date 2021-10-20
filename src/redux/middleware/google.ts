import * as Analytics from "expo-firebase-analytics";

export async function googleEvent(action: any) {
  await Analytics.logEvent(action.type.split("/").join(""));

  if (
    action.type === "user/login/fulfilled" ||
    action.type === "user/signup/fulfilled"
  ) {
    setUser(action);
  }
}

async function setUser(action: any) {
  //console.log("set user >> ", action.payload.data.email);
  await Analytics.setUserId(action.payload.data.email);
}

export async function googleTimeEvent(props: any) {
  const { type, time } = props;
  console.log(type, { time });
  await Analytics.logEvent(type, { time });
}
