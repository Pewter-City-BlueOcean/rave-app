require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();


/************************************************************
*************ENVIRONMENT VARIABLES AND CONSTANTS*************
*************************************************************/
const SG_BASE = 'https://api.seatgeek.com/2/';
const CLIENT_ID = process.env.SG_CLIENT_ID;
const CLIENT_SECRET = process.env.SG_CLIENT_SECRET;

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