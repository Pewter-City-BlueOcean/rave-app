const { Sequelize } = require('sequelize');
const sequelize = require('./dbConnect.js');

const Individual = sequelize.define('individuals', {
  individual_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  spotify_username: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  photo: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  playlist: {
    type: Sequelize.TEXT,
    allowNull:false
  }
});

module.exports = Individual;