const { options } = require("./util/sqlQueries");

const db = require("./db/connection");

// Start SQL connection
db.connect((err) => {
  if (err) throw err;
});

// Main menu begins
options();
