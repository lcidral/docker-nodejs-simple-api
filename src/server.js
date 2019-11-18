import app from "./app";

app.listen(process.env.APP_PORT);
console.log(`Express listening on ${process.env.APP_URL}:${process.env.APP_PORT}`);