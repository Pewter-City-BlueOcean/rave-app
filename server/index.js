require("dotenv").config();
const axios = require('axios');
const express = require('express');

const spotifyAuth = require("./routes/spotifyAuth.js");
const cookieParser = require('./middleware/cookieParser.js');
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

app.use(cookieParser);
app.use('/', spotifyAuth);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})