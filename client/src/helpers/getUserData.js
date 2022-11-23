import axios from 'axios';

const SERVER_ADDR = process.env.SERVER_ADDR + ':' + process.env.PORT;

export const saveUserId = (username, email) => {
  return axios.post(SERVER_ADDR + `/db/newIndividual/?username=${username}&email=${email}`).then(result => {
    console.log(result);
  })
}
export const getUserData = (individual_id) => {
  console.log(individual_id)
  return axios.get(SERVER_ADDR + `/db/Individuals/?individual_id=${individual_id}`).then(results => {
    return results;
  })
}