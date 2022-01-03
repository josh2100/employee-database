const inquirer = require("inquirer");
const db = require("../db/connection.js");
const cTable = console.table;

// // options: view all departments, view all roles, view all employees,
// // add a department, add a role, add an employee, and update an employee role

// Inquirer initial prompt
const options = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View Departments", "View Roles", "View Employees", "End"],
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
        case "View Employees":
          console.log("View employees here util prompts.js");
          viewEmployees();
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
  // Show prompts again
  setTimeout(() => {
    options();
  }, 1000);
  // options();
};

const viewRoles = () => {
  const sql = "SELECT * FROM roles";

  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log("Viewing all Roles:");
    cTable(results);
  });
  // Show prompts again
  setTimeout(() => {
    options();
  }, 1000);
};

const viewEmployees = () => {
  const sql = "SELECT * FROM employee";

  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log("Viewing all Employees:");
    cTable(results);
  });
  // Show prompts again
  setTimeout(() => {
    options();
  }, 1000);
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
