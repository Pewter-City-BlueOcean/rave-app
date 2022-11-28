const { Sequelize } = require('sequelize');
const sequelize = require('./dbConnect.js');

const Member = sequelize.define('members', {
  individual_id: {
    type: Sequelize.STRING,
    allowNull:false
  },
  group_id: {
    type: Sequelize.INTEGER,
    allowNull:false,
    primaryKey: true,
  }
});

module.exports = Member;