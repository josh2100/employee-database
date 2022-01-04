// const inquirer = require("inquirer");

const {
  viewDepartments,
  viewRoles,
  viewEmployees,
} = require("./util/sqlQueries");

const { options } = require("./util/sqlQueries");

const db = require("./db/connection");

// Async experiment
const init = async () => {
  const result = await options();
};

// call inquirer functions from util
// make util folder with inquirer functions and constructor

// Start SQL connection
db.connect((err) => {
  if (err) throw err;
  // Test sql queries
  //   viewDepartments();
  //   viewRoles();
  //   viewEmployees();

  options();
});

/// how to make promise to wait for connection?
