import { getChangelogs, getChangelogById } from "../service/changelogService";
import { NoSuchTable, NoSuchObject } from "../errors/databaseerror";
import type { Context } from "baojs";

export async function healthCheck(ctx: Context) {
  const sendMessage = "Welcome to the Changelog Application!";
  return ctx.sendJson({ status: 200, message: sendMessage });
}

export async function fetchChangeLogs(ctx: Context) {
  try {
    const changelog = await getChangelogs();
    return ctx.sendJson({ status: 200, data: changelog });
  } catch (err) {
    if (err instanceof NoSuchTable) {
      return ctx.sendJson({ message: err.message, status: 404 });
    } else {
      return ctx.sendJson({ message: "Internal Server Error", status: 500 });
    }
  }
}

export async function fetchChangeLogById(ctx: Context) {
  try {
    const entry = await getChangelogById(ctx.params.id);
    return ctx.sendJson({ status: 200, data: entry });
  } catch (err) {
    if (err instanceof NoSuchTable || err instanceof NoSuchObject) {
      return ctx.sendJson({ message: err.message, status: 404 });
    } else {
      return ctx.sendJson({ message: "Internal Server Error", status: 500 });
    }
  }
}
