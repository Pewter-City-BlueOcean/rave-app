import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Login = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  line-height: 42px;
  padding: 0;
  border: none;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  width: 10.5em;
  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;

const H1 = styled.h1`
  margin-top: 10px;
  font-family: KoHo;
  font-style: italic;
  font-size: 100px;
  color: #eeeee4;
  margin: 0 0 0 5% ;
  position:fixed;
`

const player = new Audio('/assets/egg.mp3');
player.volume = 0.5;
const LandingPage = () => {

  return (
    <div>
      <H1>neuRAVE</H1>
      <Div>
        <Login onClick={() => {window.location.href='http://localhost:8080/spotify/auth/login'}}
          onMouseEnter={() => { player.play(); }}>
          Log In With Spotify
        </Login>
        <Login onClick={() => {window.location.href='https://www.spotify.com/us/signup'}}>
          Sign Up With Spotify
        </Login>
      </Div>
    </div>
  )
}

export default LandingPage;