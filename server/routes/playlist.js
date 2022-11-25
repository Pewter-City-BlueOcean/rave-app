require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const SPOTIFY_BASE = 'https://api.spotify.com/v1';

/**
 * Get Playlist
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist
 */
router.get('/:playlist_id/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.get(`${SPOTIFY_BASE}/playlists/${playlist_id}`, headers);

  res.send();
});

/**
 * Change Playlist Details
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/change-playlist-details
 */
router.put('/:playlist_id/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;
  const body = req.body;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.put(`${SPOTIFY_BASE}/playlists/${playlist_id}`, body, headers);

  res.send();
});

/**
 * Get Playlist Items
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks
 */
router.get('/:playlist_id/tracks/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.get(`${SPOTIFY_BASE}/playlists/${playlist_id}/tracks`, headers);

  res.send();
});

/**
 * Get Playlist Cover Image
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist-cover
 */
router.get('/:playlist_id/images/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }
  axios.get(`${SPOTIFY_BASE}/images/${playlist_id}`, headers);

  res.send();
});

/**
 * Add items to playlist
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/add-tracks-to-playlist
 */
router.post('/:playlist_id/tracks/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;
  const body = {};
  const uri = req.body.uri;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.post(`${SPOTIFY_BASE}/tracks/${playlist_id}` +
    new URLSearchParams({
      uris: uri
    }), body, headers);

  res.send();
});

router.delete('/:playlist_id/tracks/:access_token', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const access_token = req.params.access_token;
  const body = req.body;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.delete(`${SPOTIFY_BASE}/playlists/${playlist_id}/tracks`, body, headers);

  res.send();
});

module.exports = router;