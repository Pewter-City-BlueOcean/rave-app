const { Sequelize } = require('sequelize');
const sequelize = require('./dbConnect.js');

const Member = sequelize.define('members', {
  individual_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  group_id: {
    type: Sequelize.INTEGER,
    allowNull:false
  }
});

module.exports = Member;