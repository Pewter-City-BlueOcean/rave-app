const { Sequelize } = require('sequelize');
const sequelize = require('./dbConnect.js');

const Individual = sequelize.define('individuals', {
  individual_id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull:false
  },
  motto: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.TEXT,
  },
  photo: {
    type: Sequelize.STRING,
  },
  playlist: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.STRING,
  }
});

module.exports = Individual;