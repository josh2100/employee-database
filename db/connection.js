const mysql = require("mysql2");
// To secure password, user and database name
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    // port: 3001,
  },
  console.log("Connected to the EMPLOYEES database.")
);



// Start SQL connection on index.js in root folder
// db.connect((err) => {
//   if (err) throw err;
//   console.log("Employees database connected.");
// });

module.exports = db;
