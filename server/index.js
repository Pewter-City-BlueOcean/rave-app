require("dotenv").config();
const axios = require('axios');
const path = require("path");
const fileUpload = require('express-fileupload');
const express = require('express');

const spotifyAuth = require("./routes/spotifyAuth.js");
const sgAuth = require("./routes/sg.js");
const { getGroups } = require("./database/controllers/groupController");
const { updateIndividual, getIndividual } = require("./database/controllers/individualsController");
//const webPlayback = require('./routes/webPlayback.js');
const { getMessages, getUserPhoto, addMessage } = require("./database/controllers/messages");
const spotify = require('./routes/spotify.js');

const cookieParser = require('./middleware/cookieParser.js');
const app = express();

const PORT = process.env.PORT;
const SERVER_ADDR = process.env.SERVER_ADDR;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(cookieParser);
app.use('/spotify/auth', spotifyAuth);
app.use('/spotify/', spotify);
app.use('/sg', sgAuth);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/db/groups', getGroups);
app.post('/db/individuals', updateIndividual);
app.get('/db/individuals', getIndividual);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", 'index.html'));
});
app.get('/messages', getMessages);
app.get('/userPhoto', getUserPhoto);
app.post('/messages', addMessage);


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening at ${SERVER_ADDR}:${PORT}`);
});
