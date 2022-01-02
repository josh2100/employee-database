// HOW DOES THIS PAGE RUN?
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1", // others use 'localhost'
    user: "process.env.DB_USER",
    password: "process.env.DB_PW",
    database: "process.env.DB_NAME",
  },
  console.log("Connected to the EMPLOYEES database.")
);

module.exports = db;
