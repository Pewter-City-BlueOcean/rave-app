import axios from 'axios';

const SERVER_ADDR = process.env.SERVER_ADDR + ':' + process.env.PORT;

export const getUserId = (username) => {
  axios.get(SERVER_ADDR + `/db/individuals/?username=${username}`).then(result => {
    console.log(result);
  })
}