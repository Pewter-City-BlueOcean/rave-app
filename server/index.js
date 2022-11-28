require("dotenv").config();
const axios = require('axios');
const path = require("path");
const fileUpload = require('express-fileupload');
const express = require('express');
const http = require('http');

const spotifyAuth = require("./routes/spotifyAuth.js");
const sgAuth = require("./routes/sg.js");
const { getGroups } = require("./database/controllers/groupController");
// const { getGroupMembers } = require('./database/controllers/members');
const { updateIndividual, getIndividual, setNewUser, setPlaylist } = require("./database/controllers/individualsController");
//const webPlayback = require('./routes/webPlayback.js');
const { getMessages, getUserPhoto, addMessage } = require("./database/controllers/messages");
const spotify = require('./routes/spotify.js');
const {getGroupInfo,getGroupMembers,getAllMembers,postMembertoGroup} = require ('./database/controllers/groupEvent/index.js');
const playlist = require('./routes/playlist.js')

const cookieParser = require('./middleware/cookieParser.js');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT;
const SERVER_ADDR = process.env.SERVER_ADDR;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(cookieParser);
app.use('/spotify/auth', spotifyAuth);
app.use('/spotify/', spotify);
app.use('/spotify/playlist', playlist);
app.use('/sg', sgAuth);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/db/groups', getGroups);

app.get('/groupInfo',getGroupInfo);
app.get('/groupMembers',getGroupMembers);
app.get('/getMembers',getAllMembers)

// app.get('/db/members/:group_id', getGroupMembers);
app.post('/db/individuals', updateIndividual);
app.post('/db/individuals/playlist', setPlaylist);
app.get('/db/individuals', getIndividual);
app.post('/db/newIndividual', setNewUser);

app.get('/messages', getMessages);
app.get('/userPhoto', getUserPhoto);
app.post('/messages', addMessage);

app.post('/groupMember',postMembertoGroup);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", 'index.html'));
});

io.on('connection', (socket)=> {
  socket.on('new message emitted!', ()=>{
    socket.broadcast.emit('new message broadcasted!')
  })
});

server.listen(PORT, () => {
  console.log(`listening at ${SERVER_ADDR}:${PORT}`);
});
