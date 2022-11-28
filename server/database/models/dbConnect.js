const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize (
  'blueocean',
  process.env.POSTGRESQL_USER,
  process.env.POSTGRESQL_PASSWORD,
  {
    host: process.env.POSTGRESQL_HOST,
    port:process.env.POSTGRESQL_PORT,
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  });

module.exports = sequelize;
