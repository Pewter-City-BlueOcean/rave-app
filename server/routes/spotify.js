require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();


const SPOTIFY_BASE = 'https://api.spotify.com/v1/';
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

/**
 * SEAT GEEKS requires a client_id and client_secret to be passed as query params to every request
 */
const AUTH_PARAMS = new URLSearchParams({
  client_id: CLIENT_ID,
  client_secret:  CLIENT_SECRET
});

router.get('/events', (req, res) => {
  res.send('yeah');
});



module.exports = router;