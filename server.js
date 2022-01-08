// const inquirer = require("inquirer");

const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
} = require("./util/sqlQueries");

const { options } = require("./util/sqlQueries");

const db = require("./db/connection");

// Start SQL connection
db.connect((err) => {
  if (err) throw err;

  // options();
});
