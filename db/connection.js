// HOW DOES THIS PAGE RUN?
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1", // others use 'localhost'DB_NAMEDB_USER
    user: "root", // DB_USER not working
    password: "mysql00", // DB_PW not working
    database: "employees", // DB_NAME not working
  },
  console.log("Connected to the EMPLOYEES database.")
);

//
//db.connect();

// Start SQL connection
db.connect((err) => {
  if (err) throw err;
  console.log("Employees database connected.");
});

module.exports = db;
