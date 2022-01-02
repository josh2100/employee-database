INSERT INTO department (name)
VALUES
  ('Accounting'),
  ('Administration')
  ('Foundations');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Accountant', 80000, 1),
  ('Laborer', 90000, 3);


--   CREATE TABLE employee (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30),
--   last_name VARCHAR (30),
--   role_id INTEGER UNIQUE NOT NULL, -- Constraint with role?, connects to department, salary
--   manager_id INTEGER NULL,
-- );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Gordon', 'Fraser', 1, 1),
  ('Ethan', 'Harper', 1, 1);