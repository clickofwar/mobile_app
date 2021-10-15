import axios from "axios";

let url = "http://localhost:3000/api/v1/";

export const request = (props: any) => {
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
