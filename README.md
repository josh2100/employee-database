# Employee-Database

This node application allows a user to maintain an employee database from command line interface.
Inquirer is used to generate questions, and MySQL is updated for responses.

Demo video at (link here)

![Employee Database Screenshot](./images/screenshot.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Technologies](#technologies)
- [Credits](#credits)
- [Questions](#questions)

## Installation

Use npm install to install mySQL2, inquirer, dotenv, console.table, and associated modules, which are required for this application.

## Usage

![Node Team Builder Screenshot](./images/screenshot.png)

Run node index on your command line while in root directory. Answer all the questions

## License

This project is licensed under the MIT license.

![MIT Badge](https://img.shields.io/npm/l/f)

## Contributions

Fork the project and create a pull request. Let me know how you think you can contribute!

## Technologies

Created with MySQL, Node.js, Inquirer, console.table, and dotenv.

## Credits

Created by Joshua Schermann

## Questions

Post an issue if you see a bug or suggested improvement.

User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
