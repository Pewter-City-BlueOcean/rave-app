import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Button } from '@mantine/core';
import axios from 'axios';
import { useRaveStore } from '../helpers/raveStore.js';
import spotify from '../helper_functions/talkToSpotify.js';

const Playlist = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px;
  cursor: pointer;
`;

const AlbumImage = styled.img`
  width: 128px;
`;

const PlaylistName = styled.b`
  margin-left: 8px;
  font-size: 18px;
`;

const SelectPlaylist = ({opened, setOpened, access_token, setAccess_token, refresh_token, user, setUser}) => {
  const userId = useRaveStore((state) => state.userId);

  const [playlist, setPlaylist] = useState(user.playlist);
  const [allPlaylists, setAllPlaylists] = useState([]);

  const handleSubmitForm = () => {
    setOpened(false);
    //create Form from object
    const formData = new FormData();
    formData.append('individual_id', userId );
    formData.append('playlist_id', playlist.id || user.playlist);

    //post Form to server
    axios.post(`${process.env.SERVER_ADDR}:${process.env.PORT}/db/individuals/playlist`, formData, config).then(result => {
      setUser(result.data[0])
    })
  };

  const handlePlaylistSelection = (playlist) => {
    setPlaylist(playlist);
  }

  useEffect(() => {
    if (opened) {
      const getMyPlaylists = async () => {
        const playlists = await spotify.getMyPlaylists(access_token, refresh_token, userId, setAccess_token);
        console.log(playlists)
        return playlists;
      }
      getMyPlaylists()
        .then((playlists) => {
          setAllPlaylists(playlists);
        });
    }
  }, [opened]);

  return (
    <Modal
      opened={opened}
      onClose={() => { setOpened(false)}}
      title="Select a playlist"
    >
      {allPlaylists.map((playlist) => {

        return (
          <Playlist onClick={() => {
            handlePlaylistSelection(playlist)}}>
            <AlbumImage src={playlist.images[0].url} />
            <PlaylistName>{playlist.name}</PlaylistName>
          </Playlist>
        )
      })}
      <Button type="submit" onClick={(e) => {
        e.preventDefault();
        handleSubmitForm();
        }}>Submit</Button>
    </Modal>
  )
}

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
}

export default SelectPlaylist;