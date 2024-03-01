import Bao from "baojs";
import { healthCheck, fetchChangeLogs, fetchChangeLogById } from "./controllers/changeLogController.ts";

const app = new Bao();

app.get("/health", healthCheck);

app.get("/change-log", fetchChangeLogs);

app.get("/change-log/:id", fetchChangeLogById);

app.after(async ctx => {
    if (ctx.res === null) { throw new Error('ctx.res is null'); }

    ctx.res.headers.set('Access-Control-Allow-Origin', '*');
    ctx.res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ctx.res.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return ctx;
});

const server = app.listen({port: 5000});

console.log(`Server listening on http://localhost:${server.port}`);