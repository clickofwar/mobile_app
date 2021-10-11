import axios from 'axios';

let url = 'http://localhost:3001/api/v1/';

export const request = (props: any) => {
    const { locate, state, arg } = props;
    return axios({
        method: 'post',
        url: `${url}${locate}`,
        headers: {'Authorization': 'Bearer '},
        data: {
          state,
          arg,
        }
      });
}