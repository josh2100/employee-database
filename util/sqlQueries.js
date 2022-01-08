const inquirer = require("inquirer");
const db = require("../db/connection.js");
const cTable = console.table;

// add a role, add an employee, and update an employee role

const options = async () => {
  try {
    const selection = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "End",
        ],
      },
    ]);
    switch (selection.choice) {
      case "View Departments":
        viewDepartments();
        break;
      case "View Roles":
        // View Roles doesn't pull up options, due to multiple use cases
        await viewRoles();
        await options();
        break;
      case "View Employees":
        viewEmployees();
        break;
      case "Add a Department":
        addDepartment();
        break;
      //
      case "Add a Role":
        addRole();
        break;
      ///
      case "Add an Employee":
        await addEmployee();
        break;
      default:
        console.log("Database connection ended");
        db.end();
    }
  } catch (error) {
    console.log(error);
  }
};

const viewDepartments = async () => {
  const sql = "SELECT * FROM department";

  try {
    const [data] = await db.promise().query(sql);
    cTable(data);
    options();
  } catch (error) {
    console.log(error);
  }
};

const viewRoles = async () => {
  const sql = "SELECT * FROM roles";

  try {
    const [data] = await db.promise().query(sql);
    cTable(data);
    // turned off for multiple use cases
    // options();
  } catch (error) {
    console.log(error);
  }
};

const viewEmployees = async () => {
  const sql = "SELECT * FROM employee";

  try {
    const [data] = await db.promise().query(sql);
    cTable(data);
    options();
  } catch (error) {
    console.log(error);
  }
};

const viewManagers = async () => {
  // null safe operator must be used! <=>
  const sql =
    "SELECT first_name, last_name, id FROM employee WHERE manager_id <=> ?";
  const params = [null];

  try {
    const [data] = await db.promise().query(sql, params);
    cTable(data);
  } catch (error) {
    console.log(error);
  }
  return;
};

const addDepartment = async () => {
  try {
    const responses = await inquirer.prompt([
      {
        type: "input",
        name: "nameOfDepartment",
        message: "Input name of new Department",
      },
    ]);

    const params = [responses.nameOfDepartment];
    const sql = "INSERT into department (department_name) VALUES (?)";

    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    const successMessage = async () => {
      console.log(`New Department added: ${responses.nameOfDepartment}`);
    };

    successMessage();
    options();
  } catch (error) {
    console.log(error);
  }
};

const addRole = async () => {
  try {
    const responses = await inquirer.prompt([
      {
        type: "input",
        name: "nameOfRole",
        message: "Input name of role",
      },
    ]);

    // view departments
  } catch (error) {
    console.log(error);
  }
};

const addEmployee = async () => {
  try {
    const nameQuestions = await inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "Input first name of new Employee",
      },
      {
        type: "input",
        name: "lastName",
        message: "Input last name of new Employee",
      },
    ]);
    await viewManagers();
    const managerQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "id",
        message: "Input ID of manager above for new Employee",
      },
    ]);
    await viewRoles();
    const roleQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "role",
        message: "Input ID of role above for new Employee",
      },
    ]);

    const params = [
      nameQuestions.firstName,
      nameQuestions.lastName,
      roleQuestion.role,
      managerQuestion.id,
    ];
    const sql =
      "INSERT into employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";

    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });
    const successMessage = async () => {
      console.log(
        `New Employee added: ${nameQuestions.firstName} ${nameQuestions.lastName}`
      );
    };

    successMessage();
    options();
  } catch (error) {
    console.log(error);
  }
};

options();

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

// Bonus
// Try to add some additional functionality to your application, such as
// the ability to do the following:
// Update employee managers.
// View employees by manager,
// View employees by department.
// Delete departments, roles, and employees.
// View the total utilized budget of a department—in other words,
// the combined salaries of all employees in that department.

module.exports = {
  options,
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addEmployee,
};
