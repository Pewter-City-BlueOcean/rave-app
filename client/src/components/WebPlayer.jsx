import React, { useState, useEffect } from 'react';

import axios from 'axios';

function WebPlayer({ access_token, currentSong }) {
  /**
   * We need to move this to be handled by server
   */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "NeuRave",
        getOAuthToken: (cb) => {
          cb(access_token);
        },
        volume: 0.5,
      });

      // Player Ready
      player.addListener("ready", ({ device_id }) => {
        // console.log("Ready with Device ID", device_id);
        let body = {
          device_ids: [device_id],
          play: false,
          access_token: access_token
        };

        // After player is ready, change current device to this player
        const connect_to_device = () => {
            // console.log("Changing to device");
            axios.put(`${process.env.SERVER_ADDR}/me/player`, body)
              .then((response) => {
                console.log(response)
              });
        };

        connect_to_device();

      });

      // Not Ready
      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      // Error Handling
      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });

      // Start device connection
      player.connect().then((success) => {
        if (success) {
          console.log("The Web Playback SDK successfully connected to Spotify!");
        }
      });
    };
  }, []);

  // const play_song = async (uri) => {
  //   console.log("Changing song");
  //   let request_answer = await fetch(
  //     "https://api.spotify.com/v1/me/player/play",
  //     {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         uris: [uri],
  //       }),
  //       headers: new Headers({
  //         Authorization: "Bearer " + access_token,
  //       }),
  //     }
  //   ).then((data) => console.log(data));
  // };

  return (
    currentSong ?
      <div className = "play" onClick = {() => {
        play_song(`spotify:track:${currentSong.id}`);
      }}>
        <a>Play</a>
      </div> : null


  );
}

export default WebPlayer