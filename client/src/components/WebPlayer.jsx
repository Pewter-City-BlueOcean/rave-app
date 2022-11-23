import React, { useState, useEffect } from 'react';
import axios from 'axios';
import spotify from '../helper_functions/talkToSpotify.js';

function WebPlayer({ access_token, track }) {
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);

  // Our hooks wrapped in non-hook functions to be used as callbacks
  const handlers = {
    setPlayer: (player) => {
      setPlayer(player);
    },

    setTrack: (player) => {
      setTrack(player);
    },

    setActive: (player) => {
      setActive(player);
    },

    setPaused: (player) => {
      setPaused(player);
    },

  }

  // Create a device and then connect to it using Spotify's Webplayer SDK
  useEffect(() => {
    spotify.createAndConnectDevice(
      access_token,
      handlers.setPlayer,
      handlers.setPaused,
      handlers.setActive,
      handlers.setTrack
    );
  }, []);

  // Skeleton player stolen from Spotify's docs on Web SDK
  if (!is_active) {
    return (
      <div>
        <div className="main-wrapper">
          <b> Instance not active. Transfer your playback using your Spotify app </b>
        </div>
      </div>)
  } else {
    return (
      <div className="container">
        <div className="main-wrapper">

          <img src={current_track.album.images[0].url} className="now-playing__cover" alt="" />

          <div className="now-playing__side">
              <div>{current_track.name}</div>
              <div>{current_track.artists[0].name}</div>

              <button onClick={() => { player.previousTrack() }} >
                  &lt;&lt;
              </button>

              <button onClick={() => { player.togglePlay() }} >
                  { is_paused ? "PLAY" : "PAUSE" }
              </button>

              <button onClick={() => { player.nextTrack() }} >
                  &gt;&gt;
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WebPlayer