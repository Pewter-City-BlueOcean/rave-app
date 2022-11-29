require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const SPOTIFY_BASE = 'https://api.spotify.com/v1';

/**
 * Get Current User's Profile
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
 */
router.get('/me/:access_token', (req, res) => {
  const access_token = req.params.access_token;

  const AUTH_HEADER = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.get(`${SPOTIFY_BASE}/me`, AUTH_HEADER)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    })
});

/**
 * Search for Item
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
 */
router.get("/search/:access_token", (req, res) => {
  const access_token = req.params.access_token;
  const query = req.body.query.split(" ").join("%20");

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.get(`${SPOTIFY_BASE}search?type=track&q=${query}`, headers)
    .then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    })
});

/**
 *
 */
router.put('/player/:access_token', (req, res) => {
  const access_token = req.params.access_token;
  const body = req.body;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.put(`${SPOTIFY_BASE}/me/player`, body, headers)
    .then((response) => {
      if (response.status === 202) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    })
});

/**
 * Start/Resume Playback
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/start-a-users-playback
 */
router.put(`/play/:access_token`, (req, res) => {
  const access_token = req.params.access_token;
  const body = req.body;

  const headers = {
    headers: {
      "Authorization": `Bearer ${access_token}`
    }
  }

  axios.put(`${SPOTIFY_BASE}/me/player/play`, body, headers)
    .then((response) => {
      if (response.status === 202) {
        res.send(response.data);
      } else {
        res.status(500).send('Spotify responded with a status ' + response.status);
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    })
});




module.exports = router;