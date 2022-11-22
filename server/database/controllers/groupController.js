const { pool } = require('../postgresDB.js');

const getGroups = (req, res) => {
  console.log('getting groups', req.query);
  res.status(200);
  res.send('Got the groups');
}

module.exports = {
  getGroups
}