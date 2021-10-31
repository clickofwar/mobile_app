import axios from "axios";
import { Platform } from "react-native";
import { PROD_URL, LOCAL_URL } from "@env";
import { amplitudeTimeEvent } from "../middleware/amplitude";

let url = PROD_URL;
if (Platform.OS === "web") {
  url = LOCAL_URL;
}

interface requestProps {
  endPoint: string;
  arg: any;
}

interface requestAuthorizedProps {
  endPoint: string;
  arg: any;
  state: any;
}

interface measureProps {
  type: string;
  t1: number;
  t0: number;
}

export const request = (props: requestProps) => {
  const { endPoint, arg } = props;
  return axios({
    method: "post",
    url: `${url}${endPoint}`,
    data: arg,
  });
};

export const requestAuthorized = (props: requestAuthorizedProps) => {
  const { endPoint, arg, state } = props;
  return axios({
    method: "post",
    url: `${url}${endPoint}`,
    headers: { Authorization: `Bearer ${state?.user?.token}` },
    data: arg,
  });
};

export const measureAPI = (props: measureProps) => {
  const { type, t0, t1 } = props;
  let time = t1 - t0;
  amplitudeTimeEvent({ type, time });
};
