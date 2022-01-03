// const inquirer = require("inquirer");
// // options: view all departments, view all roles, view all employees,
// // add a department, add a role, add an employee, and update an employee role

// const { viewDepartments, viewRoles, viewEmployees } = require("./sqlQueries");

// const options = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "choice",
//         message: "What would you like to do?",
//         choices: ["View Departments", "View Roles", "Finish"],
//       },
//     ])
//     .then((responses) => {
//       switch (responses.choice) {
//         case "View Departments":
//           //   console.log("view departments here util prompts.js");
//           viewDepartments();
//           break;
//         case "View Roles":
//           //   console.log("View roles here util prompts.js");
//           viewRoles();
//           break;

//         case "Finish":
//           console.log("Finish util prompts.js");
//           break;

//         default:
//           console.log("ended inquirer line24 util prompts.js");
//       }
//     });
// };

// module.exports = { options };
