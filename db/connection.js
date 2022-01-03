// HOW DOES THIS PAGE RUN?
const mysql = require("mysql2");
// To secure password, user and database name
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1", // others use 'localhost'
    user: "root", //process.env.DB_USER not working, root
    password: "mysql00", //process.env.DB_PW  not working, mysql00
    database: "employees", //process.env.DB_NAME not working, employees
    // port: 3307,
  },
  console.log("Connected to the EMPLOYEES database.")
);

//
//db.connect();

// Start SQL connection on index.js in root folder
// db.connect((err) => {
//   if (err) throw err;
//   console.log("Employees database connected.");
// });

module.exports = db;
