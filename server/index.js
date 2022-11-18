require("dotenv").config();
const axios = require('axios');
const path = require("path");
const cors = require("cors");

const express = require('express');

const spotifyAuth = require("./routes/spotifyAuth.js");
const sgAuth = require("./routes/sgAuth.js");

const cookieParser = require('./middleware/cookieParser.js');
const app = express();

const PORT = process.env.PORT;
const SERVER_ADDR = process.env.SERVER_ADDR;

app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

app.use(cors());
app.use(cookieParser);
app.use('/spotifyAuth', spotifyAuth);
app.use('/sgAuth', sgAuth);

app.use(express.static(path.join(__dirname, '../client/public/dist')));

app.listen(PORT, () => {
  console.log(`listening at ${SERVER_ADDR}:${PORT}`);
})