const inquirer = require("inquirer");

// functions for performing specific sql queries
// constructor function, new sql query ect
const db = require("../db/connection.js");
const cTable = console.table;
//
// const options = require("./prompts");

// mysql2 methods query,
const options = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View Departments", "View Roles", "End"],
      },
    ])
    .then((responses) => {
      switch (responses.choice) {
        case "View Departments":
          //   console.log("view departments here util prompts.js");
          viewDepartments();
          break;
        case "View Roles":
          console.log("View roles here util prompts.js");
          viewRoles();
          break;
        default:
          console.log("Database connection ended");
          db.end();
      }
    });
};

const viewDepartments = () => {
  const sql = "SELECT * FROM department";

  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log("Viewing all Departments:");
    cTable(results);
  });
  // call check question function?
  // options();
};

const viewRoles = () => {
  const sql = "SELECT * FROM roles";

  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log("Viewing all Roles:");
    cTable(results);
  });
  // call check question function?
};

const viewEmployees = () => {
  const sql = "SELECT * FROM employee";

  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log("Viewing all Employees:");
    cTable(results);
  });
  // call check question function?
};

// options: view all departments - return department names and department ids
// view all roles -  job title, role id, the department that role belongs to, and
// the salary for that role
// view all employees- including employee ids, first names, last names, job titles,
// departments, salaries, and managers that the employees report to
// add a department- enter name of department and it's added to the database
// add a role - name, salary, and department for the role it's added to database
// add an employee- first name, last name, role, and manager, and that employee is added
// update employee role- select an employee to update and their new role and this information
// is updated in the database

/// bonus
// Bonus
// Try to add some additional functionality to your application, such as
// the ability to do the following:
// Update employee managers.
// View employees by manager,
// View employees by department.
// Delete departments, roles, and employees.
// View the total utilized budget of a department—in other words,
// the combined salaries of all employees in that department.

module.exports = { options, viewDepartments, viewRoles, viewEmployees };
