DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

-- WHEN I choose to view all departments
-- THEN I am presented with a formatted table showing department names and department ids
CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL,
);

-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, 
-- and the salary for that role
CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  department NOT NULL, -- Constraint with department?
  salary DECIMAL NOT NULL,
);

-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids,
-- first names, last names, job titles, departments, salaries, and managers that the employees
--  report to
CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR (30),
  title VARCHAR (30), -- Constraint with role?
  department VARCHAR (30), -- Constraint with department?
  salary DECIMAL NOT NULL, -- Constraint with role salary?
  manager VARCHAR (30),
);


-- DROP TABLE IF EXISTS votes;
-- DROP TABLE IF EXISTS candidates;
-- DROP TABLE IF EXISTS parties;
-- DROP TABLE IF EXISTS voters;

-- CREATE TABLE parties (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(50) NOT NULL,
--   description TEXT
-- );

-- CREATE TABLE candidates (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   party_id INTEGER,
--   industry_connected BOOLEAN NOT NULL,
--   CONSTRAINT fk_party FOREIGN KEY (party_id) REFERENCES parties(id) ON DELETE SET NULL
-- );

-- CREATE TABLE voters (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   email VARCHAR(50) NOT NULL,
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE votes (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   voter_id INTEGER NOT NULL,
--   candidate_id INTEGER NOT NULL,
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   CONSTRAINT uc_voter UNIQUE (voter_id),
--   CONSTRAINT fk_voter FOREIGN KEY (voter_id) REFERENCES voters(id) ON DELETE CASCADE,
--   CONSTRAINT fk_candidate FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
-- );