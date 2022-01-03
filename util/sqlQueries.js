// functions for performing specific sql queries
// constructor function
const db = require("../db/connection.js");

// mysql2 methods query,

const viewDepartments = () => {
  console.log("YES");
  // function, const queryString = "SELECT * FROM departments";
  // db.query()
  // function
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

module.exports = viewDepartments;
