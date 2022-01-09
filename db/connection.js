const mysql = require("mysql2");
// To secure password, user and database name
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
  },
  console.log("Connected to the EMPLOYEES database.")
);

module.exports = db;
