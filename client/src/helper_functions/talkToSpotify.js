import axios from "axios"

const SERVER_ADDR = process.env.SERVER_ADDR;

const spotify = {
  whoAmI: async (access_token, refresh_token, setAccess_token) => {
    return axios.get(`/spotify/me/${access_token}`)
      .then((response) => {
        if (response.status === 200) {
          return response.data.display_name;
        } else {
          throw 'Something went wrong talking to Spotify!  Could not get /me';
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          axios.get(`/spotify/auth/refresh/${refresh_token}`)
            .then((response) => {
              setAccess_token(response.data.access_token);
            })
            .catch((error) => {
              console.log(error);
            })
        } else {
          throw 'Something went wrong talking to Spotify!  Access token is expired but we could not refresh it';
        }
      })
  }
}

export default spotify;