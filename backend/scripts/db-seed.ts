import { pool } from "../lib/db";

const data = [
  {
    path: "/employee-app.md",
    date: "January 19, 2024",
    version: "v 1.0.3",
    author: "Devzero-Inc",
  },
  {
    path: "/photo-app.md",
    date: "January 29, 2024",
    version: "v 1.0.2",
    author: "Devzero-Inc",
  },
  {
    path: "/roadmap-app.md",
    date: "February 02, 2024",
    version: "v 1.2.1",
    author: "Devzero-Inc",
  },
  {
    path: "/todo-app.md",
    date: "Februrary 08, 2024",
    version: "v 1.6.0",
    author: "Devzero-Inc",
  },
];

async function seedDatabase() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    await client.query("TRUNCATE TABLE changelog");

    for (const { path, date, version, author } of data) {
      await client.query(
        "INSERT INTO changelog (path, date, version, author) VALUES ($1, $2, $3, $4)",
        [path, date, version, author]
      );

      console.log("Inserted:", path);
    }

    await client.query("COMMIT");
    console.log("All data successfully inserted.");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Failed to insert seed data:", err);
  } finally {
    client.release();
  }
}

seedDatabase().catch((err) => {
  console.error("Failed to seed database:", err);
});
