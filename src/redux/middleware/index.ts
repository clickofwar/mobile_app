import * as Analytics from "expo-firebase-analytics";

export const loggingMiddleware =
  (store: any) => (next: any) => (action: any) => {
    console.log("Redux Type ==> ", action.type);
    console.log("Redux Payload ==> ", action.payload);

    googleEvent(action);

    next(action);
  };

async function googleEvent(action: any) {
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
