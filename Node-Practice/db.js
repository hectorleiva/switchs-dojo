const { Client, Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "aswitch",
  host: "localhost",
  password: "aswitch",
  database: "pizzabox",
  port: +process.env.POSTGRES_PORT || 5432,
});

module.exports = { query: (text, params) => pool.query(text, params) };
