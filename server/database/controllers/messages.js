const pool = require('../postgresDB.js');

const getMessages = (req, res) => {
  const groupId = req.query.groupId;
  return pool.query('SELECT m.message_creation_datetime, m.message_text, m.individual_id, i.photo, i.individual_id FROM messages m, individuals i WHERE m.group_id = $1 AND m.individual_id = i.individual_id ORDER BY m.message_creation_datetime DESC', [groupId])
    .then((result) => res.send(result.rows))
    .catch((err) => console.log(err));
};

const getUserPhoto = (req, res) => {
  const userId = req.query.userId;
  return pool.query('SELECT photo FROM individuals WHERE individual_id = $1', [userId])
    .then((result) => res.send(result.rows[0]))
    .catch((err) => console.log(err));
};

const addMessage = (req, res) => {
  console.log('added attempt!')
  return pool.query('INSERT INTO messages (message_id, group_id, message_creation_datetime, individual_id, message_text) VALUES (default, $1, default, $2, $3)', [req.body.groupId, req.body.userId, req.body.message])
    .then(() => res.end())
    .catch((err) => console.log(err));
}

module.exports = {
  getMessages,
  getUserPhoto,
  addMessage
};