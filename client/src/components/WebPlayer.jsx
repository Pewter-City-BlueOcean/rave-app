import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

import spotify from '../helper_functions/talkToSpotify.js';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  margin-left: 10%;
  margin-right: 10%;
  position:fixed;
  bottom:0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%
`;

const NotConnected = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  color: white;
`;

const SongWrapper = styled.div`
  display: inline-block;
  flex-basis: 33%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 33%;
`;

const NameArtist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 8px;
  color: white;
`;

const Name = styled.b`

`;

const Artist = styled.a`

`;

const ImageContainer = styled.div`
  padding: 2px
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-basis: 34%;
  padding: 4px;
  border-radius: 6px;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Hamburger = styled.div`
  flex-basis: 33%;
`;

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

  const play = is_paused ? 'faPlay' : 'fa-duotone fa-pause'

  // Skeleton player stolen from Spotify's docs on Web SDK
  if (!is_active || !current_track) {
    return (
      <div></div>
      // <Wrapper>
      //   <NotConnected>
      //     <Text>

      //     </Text>
      //   </NotConnected>
      // </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <SongWrapper>

          <SongInfo>
            <ImageContainer>
              <img
                src={current_track.album.images[0].url}
                style={{
                  height: '64px',
                  width: '64px',
                }}
                />
              </ImageContainer>
          <NameArtist>
            <Name>{current_track.name}</Name>
            <Artist>{current_track.artists[0].name}</Artist>
          </NameArtist>
          </SongInfo>
        </SongWrapper>
        <ButtonsWrapper>

          <ButtonsContainer>


            <FontAwesomeIcon icon={faBackward} onClick={() => { player.previousTrack() }}/>

            <FontAwesomeIcon icon={is_paused ? faPlay : faPause} onClick={() => {player.togglePlay()}}/>

            <FontAwesomeIcon icon={faForward} onClick={() => { player.previousTrack() }}/>

          </ButtonsContainer>
        </ButtonsWrapper>
        <Hamburger>
              <div></div>
        </Hamburger>
      </Wrapper>
    );
  }
}

export default WebPlayer;