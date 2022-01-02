-- DROP TABLE IF EXISTS employee;
-- DROP TABLE IF EXISTS roles;
-- DROP TABLE IF EXISTS department;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) UNIQUE NOT NULL
);

-- CREATE TABLE roles (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(30) UNIQUE NOT NULL,
--   salary DECIMAL NOT NULL,
--   department_id INTEGER UNIQUE NOT NULL, -- Reference to department role belongs to
-- );

-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids,
-- first names, last names, job titles, departments, salaries, and managers that the employees
--  report to
-- CREATE TABLE employee (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30),
--   last_name VARCHAR (30),
--   role_id INTEGER UNIQUE NOT NULL, -- Constraint with role?, connects to department, salary
--   manager_id INTEGER NULL,
-- );

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