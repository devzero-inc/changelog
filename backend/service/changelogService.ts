import { pool } from "../lib/db";
import {
  NoSuchTable,
  NoSuchObject,
  UnhandledError,
} from "../errors/databaseerror";
import type { PoolClient } from "pg";

export async function getChangelogs(client: PoolClient | null = null) {
  if (client === null) {
    client = await pool.connect();
  }

  try {
    const res = await client.query("SELECT * FROM changelog ORDER BY id");
    return res.rows;
  } catch (err) {
    console.error("Error fetching changelogs:", err);
    if (typeof err === "object" && err !== null && "code" in err) {
      const code = (err as { code: string }).code;
      if (code === "42P01") {
        throw new NoSuchTable("table not found");
      }
    } else {
      throw new UnhandledError("Unhandled error");
    }
  } finally {
    client.release();
  }
}

export async function getChangelogById(
  id: string,
  client: PoolClient | null = null
) {
  if (client === null) {
    client = await pool.connect();
  }
  try {
    const res = await client.query("SELECT * FROM changelog WHERE id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    console.error("Error fetching changelog:", err);
    if (typeof err === "object" && err !== null && "code" in err) {
      const code = (err as { code: string }).code;
      if (code === "42P01") {
        throw new NoSuchTable("table not found");
      } else if (code === "42704") {
        throw new NoSuchObject("object not found");
      }
    } else {
      throw new UnhandledError("Unhandled error");
    }
  } finally {
    client.release();
  }
}
