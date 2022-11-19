const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  host: process.env.POSTGRESQL_HOST,
  database: 'blueocean',
  password: process.env.POSTGRESQL_PASSWORD,
  port: process.env.POSTGRESQL_PORT
})