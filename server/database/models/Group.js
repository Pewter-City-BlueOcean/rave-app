const { Sequelize } = require('sequelize');
const sequelize = require('./dbConnect.js');

const Group = sequelize.define('groups', {
  group_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  event_title: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  datetime_local: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  performers: {
    type: Sequelize.JSON,
    allowNull:false
  },
  city: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  country: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  postal_code: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  location_latitude: {
    type: Sequelize.NUMBER,
    allowNull:false
  },
  location_longitude: {
    type: Sequelize.NUMBER,
    allowNull:false
  },
  notification: {
    type: Sequelize.BOOLEAN,
    allowNull:false
  },
  created_by_individual_id: {
    type: Sequelize.NUMBER,
    allowNull:false
  },
  date_added_to_db: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
});

module.exports = Group;