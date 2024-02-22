import Bao from "baojs";
const app = new Bao();

app.get("/changelogs", (ctx) => {
    // will get the data from database in later commits
    const data = [
        {
            path: '../../content/employee-app.md',
            date: "January 19, 2024",
            version: "v 1.0.3"
        },
        {
            path: '../../content/photo-app.md',
            date: "January 29, 2024",
            version: "v 1.0.2"
        },
        {
            path: '../../content/roadmap-app.md',
            date: "February 02, 2024",
            version: "v 1.2.1"
        },
        {
            path: '../../content/photo-app.md',
            date: "Februrary 08, 2024",
            version: "v 1.6.0"
        }
    ];

    return ctx.sendJson( {status: 200, data: data} );
});

app.after(async ctx => {
    if (ctx.res === null) { throw new Error('ctx.res is null'); }

    ctx.res.headers.set('Access-Control-Allow-Origin', '*');
    ctx.res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ctx.res.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return ctx;
});

const server = app.listen({port: 5000});
console.log(`Listening on ${server.hostname}:${server.port}`);