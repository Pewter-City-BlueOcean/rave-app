require("dotenv").config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/callback', (req, res) => {
  res.send('yeah');
});



module.exports = router;