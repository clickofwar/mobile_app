import axios from "axios";
import { Platform } from "react-native";
import { PROD_URL, LOCAL_URL } from "@env";

let url = PROD_URL;
if (Platform.OS === "web") {
  url = LOCAL_URL;
}

export const request = (props: any) => {
  const { endPoint, arg } = props;
  console.log(arg);
  return axios({
    method: "post",
    url: `${url}${endPoint}`,
    data: arg,
  });
};

export const requestAuthorized = (props: any) => {
  const { endPoint, state, arg } = props;
  return axios({
    method: "post",
    url: `${url}${endPoint}`,
    headers: { Authorization: "Bearer " },
    data: {
      state,
      arg,
    },
  });
};
