import React, { useState, useEffect } from 'react';
import { Modal } from '@mantine/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import SelectPlaylist from './SelectPlaylist.jsx';

import spotify from '../helper_functions/talkToSpotify.js';

const Playlist = ({id, access_token, setAccess_token, refresh_token, isOwner, user, setUser}) => {
  const [playlist, setPlaylist] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const getPlaylist = async () => {
        const retrievedPlaylist = await spotify.getPlaylist(access_token, refresh_token, id, setAccess_token);
        return retrievedPlaylist;
      }
      getPlaylist()
        .then((retrievedPlaylist) => {
          setPlaylist(retrievedPlaylist);
        })
    }
  }, [id]);

  const handlePlay = () => {
    spotify.setPlayback(access_token, refresh_token, setAccess_token, `spotify:playlist:${id}`);
  }

  return playlist ? (
    <div style={styles.wrapper} onClick={handlePlay}>
      <div style={styles.imageWrapper}>
        <img style={styles.image} src={playlist.images[0].url}/>
      </div>
      <div style={styles.nameWrapper}>
        <a style={styles.playlistName}>
          {playlist.name}
        </a>
      </div>
    </div>
  ) : (
    isOwner ?
    <div>
      <FontAwesomeIcon style={styles.addPlaylist} icon={faPlus} onClick={() => {setModalIsOpen(true)}}/>
      Add a playlist
      <SelectPlaylist
        opened={modalIsOpen}
        setOpened={setModalIsOpen}
        access_token={access_token}
        setAccess_token={setAccess_token}
        refresh_token={refresh_token}
        user={user}
        setUser={setUser}
      />
    </div> : <div> This page doesn't have a playlist! It'd be a lot cooler if it did. </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '70vh',
    height: '128px',
    margin: '5px',
    justifyContent: 'start',
    alignItems: 'left',
    cursor: 'pointer',
  },
  imageWrapper: {
    position: 'relative',
    width: '128px',
    height: '128px',
    paddingBottom: '64px',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    aspectRatio: '1 / 1',
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  addPlaylist: {
    cursor: 'pointer',
  }
}

export default Playlist;