INSERT INTO department (department_name)
VALUES
  ('Accounting'),
  ('Administration'),
  ('Software Development'),
  ('Foundations');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Accountant', 80000, 1),
  ('System Manager', 90000, 2),
  ('Laborer', 90000, 4),
  ('Janitor', 50000, 4),
  ('Software Engineer', 110000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Gordon', 'Fraser', 2, null),
  ('Zelda', "Moses", 1, 2),
  ('Ethan', 'Harper', 1, null),
  ('Derek', 'Adela', 4, 5),
  ('Ingram', 'Lola', 1, 3),
  ('Jeremy', 'Frank', 3, null);