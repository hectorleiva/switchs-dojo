const { Client, Pool } = require('pg'); 
require('dotenv').config();

console.log("postgres PORT: ", process.env.PORT);

const pool = new Pool({
  user: 'aswitch',
  host: 'localhost',
  password:'aswitch',
  database: 'pizzabox',
  port: +process.env.PORT || 5432
});

module.exports = {query: (text,params) => pool.query(text,params)}
