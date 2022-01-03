INSERT INTO department (department_name)
VALUES
  ('Accounting'),
  ('Administration'),
  ('Foundations');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Accountant', 80000, 1),
  ('System Manager', 90000, 2),
  ('Laborer', 90000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Gordon', 'Fraser', 1, 1),
  ('Zelda', "Moses", 1, 2),
  ('Ethan', 'Harper', 1, 1);