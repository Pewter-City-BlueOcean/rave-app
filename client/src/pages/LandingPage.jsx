import axios from 'axios';
import React from 'react';

const player = new Audio('/assets/egg.mp3');
player.volume = 0.5;
const LandingPage = () => {

  return (
    <div onMouseEnter={() => {
      player.play();
    }}>
      <a href='http://localhost:8080/spotify/auth/login'>
        Log In With Spotify
      </a>
    </div>
  )
}

export default LandingPage;