const { Sequelize } = require('sequelize');
const sequelize = require('./dbConnect.js');

const Message = sequelize.define('messages', {
  message_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  group_id: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  message_creation_datetime: {
    type: 'TIMESTAMP',
    allowNull:false
  },
  individual_id: {
    type: Sequelize.STRING,
    allowNull:false
  },
  message_text: {
    type: Sequelize.TEXT,
    allowNull:false
  }
});

module.exports = Message;