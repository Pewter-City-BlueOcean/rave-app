import axios from "axios"

const SERVER_ADDR = process.env.SERVER_ADDR + ':' + process.env.PORT;

const spotify = {
  /**
   * Asks spotify for information from /me endpoint
   *
   * @param {*} access_token - auth token
   * @param {*} refresh_token - if our auth token is expired, we need to request a new one using our refresh token
   * @param {*} setAccess_token - our setAccess_token hook (wrapped in a non-hook function)
   * @returns
   */
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
  },

  /**
   * Spotify's Webplayback SDK
   *
   * @param {*} access_token - auth token
   * @param {*} setPlayer - our setPlayer hook (wrapped in a non-hook function)
   * @param {*} setPaused - our setPaused hook (wrapped in a non-hook function)
   * @param {*} setActive - our setActive hook (wrapped in a non-hook function)
   * @param {*} setTrack - our setTrack hook (wrapped in a non-hook function)
   */
  createAndConnectDevice: async (access_token, setPlayer, setPaused, setActive, setTrack) => {

    // https://developer.spotify.com/documentation/web-playback-sdk/guide/#react-components
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

        const player = new window.Spotify.Player({
            name: 'neuRAVE',
            getOAuthToken: cb => { cb(access_token); },
            volume: 0.5
        });

        setPlayer(player);

        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
        });

        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        player.addListener('player_state_changed', ( state => {

          if (!state) {
              return;
          }

          setTrack(state.track_window.current_track);
          setPaused(state.paused);


          player.getCurrentState().then( state => {
              (!state)? setActive(false) : setActive(true)
          });

        }));

        player.connect();

    };
  }
}

export default spotify;