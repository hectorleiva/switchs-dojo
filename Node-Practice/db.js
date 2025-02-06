
const { Client, Pool } = require('pg'); 
const pool = new Pool({
  user: 'aswitch',
  host: 'localhost',
  password:'aswitch',
  database: 'pizzabox',
  port: 5432,
});
module.exports = {query: (text,params) => pool.query(text,params)}