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
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add a Department",
          "End",
        ],
      },
    ])
    .then((responses) => {
      switch (responses.choice) {
        case "View Departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;

        case "Add a Department":
          console.log("Add department here util prompts.js");
          addDepartment();
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

const addDepartment = () => {
  // Start with inquirer, ask what to name the department
  return inquirer
    .prompt([
      {
        type: "input",
        name: "nameOfDepartment",
        message: "Input name of new Department",
      },
    ])
    .then((responses) => {
      const params = [responses.nameOfDepartment];
      const sql = "INSERT into department (department_name) VALUES (?)";

      console.log(params);

      db.query(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: "success",
          data: body,
        });
      });

      // Show prompts again
      setTimeout(() => {
        options();
      }, 1000);
    });

  // const params = [responses.name]

  // db.query(sql, params, (err, result) => {
  //   if (err) {
  //     res.status(400).json({ error: err.message });
  //     return;
  //   }
  //   res.json({
  //     message: "success",
  //     data: body,
  //   });
  // });
};

// Data validation
// const errors = inputCheck(body, "first_name", "last_name", "email");
// if (errors) {
//   res.status(400).json({ error: errors });
//   return;
// }

// const sql = `INSERT INTO voters (first_name, last_name, email) VALUES (?,?,?)`;
// const params = [body.first_name, body.last_name, body.email];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     res.status(400).json({ error: err.message });
//     return;
//   }
//   res.json({
//     message: "success",
//     data: body,
//   });
// });

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
