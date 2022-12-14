import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import { useRaveStore } from '../../helpers/raveStore.js';

const Chat = () => {
  const groupId = useRaveStore((state) => state.currentGroup.group_id);
  const userId = useRaveStore((state) => state.userId);

  const [profilePic, setProfilePic] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  if (!userId || !groupId) {
    return <div>loading...</div>
  }
  const getUserInfo = () => {
    // should get user information and then set profileInfo to returned data
    axios.get(`/userPhoto?userId=${userId}`)
      .then((response) => {
        setProfilePic(response.data.photo);
      })
      .catch((err) => console.log(err));
  };

  const getMessages = () => {
    // should get messages and then set messages to returned data every 5 seconds
    axios.get(`/messages?groupId=${groupId}`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handlePostMessage = () => {
    if (newMessage !== '') {
      return axios.post('/messages', {
        'groupId': groupId,
        'userId': userId,
        'message': newMessage
      })
      .then(() => setNewMessage(''))
      .then(()=> socket.emit('new message emitted!'))
      .then(() => getMessages())
      .catch((err) => console.log(err));
    }
  };

  socket.on('new message broadcasted!', ()=> {getMessages()});

  useEffect(() => {
    getUserInfo();
    getMessages();
  }, []);

  return (
    <div style={{ height: '570px', backgroundColor: '#000000B3', borderRadius: '5px', margin: '5px', padding: '30px'}}>

      <div style={{height: '420px', overflow: 'auto', color: '#FFFFFF', display: 'flex', flexDirection: 'column-reverse'}}>
        {messages.map((message, i) => {
          if (message.individual_id !== userId) {
            return (
              <div key={i} style={{display: 'flex'}}>
                <img src={message.photo} width='40px' height='40px' style={{borderRadius: '50%', objectFit: 'cover', verticalAlign: 'middle', margin: '15px'}}></img>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                  <div style={{display: 'flex'}}>
                    <h5 style={{margin: '0'}}> {message.individual_id} &#x2022; </h5>
                    <p style={{margin: '1px 3px', fontSize: '12px'}}> {moment(message.message_creation_datetime).subtract(6, 'hours').fromNow()} </p>
                  </div>
                  <p style={{backgroundColor: '#FFFFFF', color: '#000000', width: 'fit-content', maxWidth: '400px', height: 'fit-content', padding: '5px 10px', borderRadius: '5px', margin: '5px 0 20px 0', textAlign: 'left', wordWrap: 'break-word'}}> {message.message_text} </p>
                </div>
              </div>
            )
          } else {
            return (
              <div key={i} style={{display: 'flex', alignSelf: 'flex-end'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                  <div style={{display: 'flex'}}>
                    <p style={{margin: '1px 3px', fontSize: '12px'}}> {moment(message.message_creation_datetime).subtract(6, 'hours').fromNow()} </p>
                    <h5 style={{margin: '0'}}> &#x2022; {message.individual_id} </h5>
                  </div>
                  <p style={{backgroundColor: '#FFFFFF', color: '#000000', width: 'fit-content', maxWidth: '400px', height: 'fit-content', padding: '5px 10px', borderRadius: '5px', margin: '5px 0 20px 0', textAlign: 'left', wordWrap: 'break-word'}}> {message.message_text} </p>
                </div>
                <img src={message.photo} width='40px' height='40px' style={{borderRadius: '50%', objectFit: 'cover', verticalAlign: 'middle', margin: '15px'}}></img>
              </div>
            )
          }
        })}
      </div>

      <hr></hr>
      {profilePic !== '' &&
        <div style={{height: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={profilePic} width='40px' height='40px' style={{borderRadius: '50%', objectFit: 'cover', verticalAlign: 'middle', margin: '10px'}}></img>
          <input value={newMessage} style={{height: '35px', width: '400px', borderRadius: '5px', padding: '5px 10px', border: 'none', margin: '10px'}} onChange={(e) => setNewMessage(e.target.value)}></input>
          <button style={{backgroundColor: '#FFFFFF', color: 'black', border: 'none', height: '35px', padding: '8px 10px', borderRadius: '5px', margin: '10px'}} onClick={handlePostMessage}> Send </button>
        </div>
      }

    </div>
  )
}

export default Chat;