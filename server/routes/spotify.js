require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();


const SPOTIFY_BASE = 'https://api.spotify.com/v1';
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

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
        res.status(500).send('Could not get /me info from spotify');
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        console.log('hi')
        res.status(401).send();
      } else {
        res.status(500).send('Spotify responded with a status ' + error.response.status);
      }
    })
});



module.exports = router;