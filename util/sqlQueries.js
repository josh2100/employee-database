const inquirer = require("inquirer");
const db = require("../db/connection.js");
const cTable = console.table;

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
          "Update Employee Role",
          "View Employees by Manager",
          "Delete an Employee",
          "Delete a Department",
          "Delete a Role",
          "View total utilized budget by department",
          "End",
        ],
      },
    ]);

    switch (selection.choice) {
      case "View Departments":
        await viewDepartments();
        options();
        break;
      case "View Roles":
        await viewRoles();
        options();
        break;
      case "View Employees":
        await viewEmployees();
        options();
        break;
      case "Add a Department":
        await addDepartment();
        options();
        break;
      case "Add a Role":
        await addRole();
        options();
        break;
      case "Add an Employee":
        await addEmployee();
        options();
        break;
      case "Update Employee Role":
        await updateEmployeeRole();
        options();
        break;

      //"View Employees by Manager"
      case "View Employees by Manager":
        await viewEmployeesByManager();
        options();
        break;

      case "Delete an Employee":
        await deleteEmployee();
        options();
        break;
      case "Delete a Department":
        await deleteDepartment();
        options();
        break;
      case "Delete a Role":
        await deleteRole();
        options();
        break;
      case "View total utilized budget by department":
        await viewBudget();
        options();
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
  } catch (error) {
    console.log(error);
  }
};

const viewRoles = async () => {
  const sql = "SELECT * FROM roles";

  try {
    const [data] = await db.promise().query(sql);
    cTable(data);
  } catch (error) {
    console.log(error);
  }
};

const viewEmployees = async () => {
  const sql = "SELECT * FROM employee";

  try {
    const [data] = await db.promise().query(sql);
    cTable(data);
  } catch (error) {
    console.log(error);
  }
};

const viewManagers = async () => {
  const sql =
    "SELECT first_name, last_name, id, role_id FROM employee WHERE manager_id <=> ?";
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
    // options();
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
        message: "Input title of role",
      },
    ]);

    const salaryQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "salary",
        message: "Input salary for role",
      },
    ]);

    await viewDepartments();

    const departmentQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "nameDepartment",
        message: "Input id of department for this role",
      },
    ]);

    console.log(`nameOfRole: ${responses.nameOfRole}`);
    console.log(`salary: ${salaryQuestion.salary}`);
    console.log(`department: ${departmentQuestion.nameDepartment}`);

    const params = [
      responses.nameOfRole,
      salaryQuestion.salary,
      departmentQuestion.nameDepartment,
    ];
    const sql =
      "INSERT into roles (title, salary, department_id) VALUES (?,?,?)";

    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    const successMessage = async () => {
      console.log(`New Role added: ${responses.nameOfRole}`);
    };

    successMessage();
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
  } catch (error) {
    console.log(error);
  }
};

const updateEmployeeRole = async () => {
  try {
    console.log("");
    // display employees
    await viewEmployees();
    // inquire which employee to update
    const employeeQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "idOfEmployee",
        message: "Input id of Employee to update",
      },
    ]);
    // console.log(`Employee ID: ${employeeQuestion.idOfEmployee}`);
    // inquire id of new role

    await viewRoles();

    const roleQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "idOfRole",
        message: "Input id of employee's new role",
      },
    ]);

    console.log(`Employee ID: ${employeeQuestion.idOfEmployee}`);
    console.log(`role ID: ${roleQuestion.idOfRole}`);
    // db query with params

    const params = [roleQuestion.idOfRole, employeeQuestion.idOfEmployee];
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;

    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });
    const successMessage = async () => {
      console.log(`Employee Role Updated: ${roleQuestion.idOfRole}`);
    };

    successMessage();
  } catch (error) {
    console.log(error);
  }
};

const viewEmployeesByManager = async () => {
  // display managers viewManagers();
  // ask which manager to view
  // query

  try {
    await viewManagers();

    const responses = await inquirer.prompt([
      {
        type: "input",
        name: "idOfManager",
        message: "Input id of manager to view employees by manager",
      },
    ]);

    const params = [responses.idOfManager];
    const sql =
      "SELECT first_name, last_name, role_id FROM employee WHERE manager_id = ?";

    const [data] = await db.promise().query(sql, params);
    cTable(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteEmployee = async () => {
  try {
    await viewEmployees();
    const employeeQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "idOfEmployee",
        message: "Input id of Employee to DELETE",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter a valid number.");
            return false;
          }
        },
      },
    ]);

    const params = [employeeQuestion.idOfEmployee];
    const sql = `DELETE FROM employee WHERE id = ?`;

    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    const successMessage = async () => {
      console.log(`Employee Deleted: ${employeeQuestion.idOfEmployee}`);
    };

    successMessage();
  } catch (error) {
    console.log(error);
  }
};

const deleteDepartment = async () => {
  try {
    await viewDepartments();
    const departmentQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "idOfDepartment",
        message: "Input id of Department to DELETE",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter a valid number.");
            return false;
          }
        },
      },
    ]);

    const params = [departmentQuestion.idOfDepartment];
    const sql = `DELETE FROM department WHERE id = ?`;

    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    const successMessage = async () => {
      console.log(`Department Deleted: ${departmentQuestion.idOfDepartment}`);
    };

    successMessage();
  } catch (error) {
    console.log(error);
  }
};

const deleteRole = async () => {
  try {
    await viewRoles();
    const roleQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "idOfRole",
        message: "Input id of Role to DELETE",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter a valid number.");
            return false;
          }
        },
      },
    ]);

    const params = [roleQuestion.idOfRole];
    const sql = `DELETE FROM roles WHERE id = ?`;

    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    const successMessage = async () => {
      console.log(`Role Deleted: ${roleQuestion.idOfDepartment}`);
    };

    successMessage();
  } catch (error) {
    console.log(error);
  }
};

const viewBudget = async () => {
  try {
    await viewRoles();
    const departmentQuestion = await inquirer.prompt([
      {
        type: "input",
        name: "idOfDepartment",
        message: "Input id of Department to see total utilized budget",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter a valid number.");
            return false;
          }
        },
      },
    ]);

    const params = [departmentQuestion.idOfDepartment];
    const sql = `	SELECT SUM(salary) FROM roles WHERE department_id = ?;`;

    const [budget] = await db.promise().query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    cTable(budget);
  } catch (error) {
    console.log(error);
  }
};

// options: view all departments - return department names and department ids
// view all roles -  job title, role id, the department that role belongs to, and
// the salary for that role JOIN TABLE TO SEE DEPARTMENT INSTEAD OF ID???
// view all employees- including employee ids, first names, last names, job titles,
// departments, salaries, and managers that the employees report to SUPER JOIN???
// add a department- enter name of department and it's added to the database
// add a role - name, salary, and department for the role it's added to database
// add an employee- first name, last name, role, and manager, and that employee is added
// update employee role- select an employee to update and their new role and this information
// is updated in the database

// Bonus
// Try to add some additional functionality to your application, such as
// the ability to do the following:
// Update employee managers.
// View employees by manager, --
// View employees by department.
// Delete departments, roles, and employees. - - -
// View the total utilized budget of a department—in other words, -------
// the combined salaries of all employees in that department.

module.exports = {
  options,
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addEmployee,
};
