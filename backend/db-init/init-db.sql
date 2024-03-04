CREATE TABLE IF NOT EXISTS changelog (
  id SERIAL PRIMARY KEY,
  path TEXT NOT NULL,
  version TEXT NOT NULL,
  date TEXT NOT NULL,
  author TEXT NOT NULL
);

INSERT INTO changelog (path, date, version, author) VALUES
('/employee-app.md', 'January 19, 2024', 'v 1.0.3', 'Devzero-Inc'),
('/photo-app.md', 'January 29, 2024', 'v 1.0.2', 'Devzero-Inc'),
('/roadmap-app.md', 'February 02, 2024', 'v 1.2.1', 'Devzero-Inc'),
('/todo-app.md', 'February 08, 2024', 'v 1.6.0', 'Devzero-Inc');
