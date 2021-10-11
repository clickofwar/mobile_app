import axios from "axios";

export const chuckApi = (props: any) => {
  return axios.get("https://api.chucknorris.io/jokes/random");
};
