require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const SPOTIFY_BASE = 'https://api.spotify.com/v1';
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

router.put('/:access_token', (req, res) => {
  res.send();
  console.log(req);
  //axios.put(`${SPOTIFY_BASE}/me/player`, );
});

router.put('/play/:access_token', (req, res) => {
  res.send();
  console.log(req);
  //axios.put(`${SPOTIFY_BASE}/me/player/play`);
});


module.exports = router;