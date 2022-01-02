// HOW DOES THIS PAGE RUN?
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1", // others use 'localhost'
    user: "root",
    password: "mysql00",
    database: "employees",
  },
  console.log("Connected to the EMPLOYEES database.")
);

db.connect();

module.exports = db;
