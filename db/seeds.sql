INSERT INTO department (name)
VALUES
  ('Accounting'),
  ('Administration')
  ('Foundations');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Accountant', 80000, 1),
  ('Laborer', 90000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Gordon', 'Fraser', 1, 1),
  ('Ethan', 'Harper', 1, 1);