require("dotenv").config();
const axios = require('axios');
const path = require("path");

const express = require('express');

const spotifyAuth = require("./routes/spotifyAuth.js");
const sgAuth = require("./routes/sg.js");
const { getGroups } = require("./database/controllers/groupController");

const cookieParser = require('./middleware/cookieParser.js');
const app = express();

const PORT = process.env.PORT;
const SERVER_ADDR = process.env.SERVER_ADDR;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser);
app.use('/spotify/auth', spotifyAuth);
app.use('/sg', sgAuth);


app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/db/groups', getGroups);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening at ${SERVER_ADDR}:${PORT}`);
});