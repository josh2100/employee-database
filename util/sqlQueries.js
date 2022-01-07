const inquirer = require("inquirer");
const db = require("../db/connection.js");
const cTable = console.table;

// // options: view all departments, view all roles, view all employees,
// // add a department, add a role, add an employee, and update an employee role

// Inquirer initial prompt, return to this menu after every question
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
          "Add an Employee",
          "View Managers", // only for testing
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
          addDepartment();
          break;
        case "Add an Employee":
          console.log("Add employee here util prompts.js");
          addEmployee();
          break;

        case "View Managers":
          console.log("Add employee here util prompts.js");
          viewManagers();
          break;

        default:
          console.log("Database connection ended");
          db.end();
      }
    });
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
    options();
  } catch (error) {
    console.log(error);
  }
};

const viewEmployees = async () => {
  const sql = "SELECT * FROM employee";

  try {
    const [data] = await db.promise().query(sql);
    cTable(data);
    // omit options for viewmanagers?
    options();
  } catch (error) {
    console.log(error);
  }
};

const viewManagers = async () => {
  // null safe operator must be used! <=>
  const sql = "SELECT first_name FROM employee WHERE manager_id <=> ?";
  const params = [null];

  try {
    const [data] = await db.promise().query(sql, params);
    cTable(data);
    // omit options for viewmanagers?
    options();
  } catch (error) {
    console.log(error);
  }
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
          console.log(err);
          return;
        }
        console.log("New Department added");
        options();
      });
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

const addEmployee = async () => {
  // Make array of responses
  let answers = [];
  // inquire first and last name of employees
  try {
    // inquirer what is name of employee
    const responses = await inquirer.prompt([
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
      // {
      //   type: "list",
      //   name: "manager",
      //   message: "Input manager of new Employee",
      //   choices: managers,
      // },
    ]);
    console.log(responses);
    console.log(responses.firstName);
    viewManagers();

    // function askWhichManager could return object with id of manager with validations
    //
  } catch (error) {
    console.log(error);
  }
  // push name to answers
  // Display list of managers,
  // inquire what manager this employee reports to
};

// const addEmployee = async () => {
//   // viewManagers();

//   try {
//     // query to find out employees who are managers are null
//     let [managers] = await db
//       .promise()
//       .query("SELECT first_name FROM employee WHERE manager_id = ?", [null]);

//     console.log(managers);
//     console.log({ managers });
//     console.log([managers]);
//     cTable(managers);

//     // inquirer what is name of employee
//     const responses = await inquirer.prompt([
//       {
//         type: "input",
//         name: "firstName",
//         message: "Input first name of new Employee",
//       },
//       {
//         type: "input",
//         name: "lastName",
//         message: "Input last name of new Employee",
//       },
//       {
//         type: "list",
//         name: "manager",
//         message: "Input manager of new Employee",
//         choices: managers,
//       },
//     ]);

//     // define sql by getting managers?
//     let sql = "SELECT first_name FROM employee WHERE manager_id = null";

//     cTable(managers); //
//     const [data] = await db.promise().query(sql); // sql is not defined
//     console.log(data.managers);
//     cTable(data); // undef

//     cTable(data.first_name);
//     cTable(data.id); // undef
//     // options();
//   } catch (error) {
//     console.log(error);
//   }

//   // first name and last name
//   // what id is their role
//   //
//   // what manager do they have
// };

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
