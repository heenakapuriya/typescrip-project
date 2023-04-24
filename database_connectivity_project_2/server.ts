import express, {Application, Request, Response} from 'express';
import dotenv from 'dotenv'
import {DBUtil} from "./util/DBUtil";
import mongoose from 'mongoose';
const app: Application = express();

// configure express to 
dotenv.config({
    path: "./.env"
});

const port: string | number = process.env.PORT || 9000;
const dbUrl: string | undefined = process.env.MONGO_DB_CLOUD_URL;
const dbName: string | undefined = process.env.MONGO_DB_DATABASE;

app.get("/", (request: Request, response: Response) => {
    response.status(200);
    response.json({
        msg: "Welcome to Express Server"
    });
});

// configure the routers
// app.use("/contacts", contactRouter);
// app.use("/groups", groupRouter);

if (port) {
    app.listen(Number(port), () => {
        if (dbUrl && dbName) {
            console.log(`${dbUrl} - ${dbName}`);
            DBUtil.connectToDB(dbUrl, dbName).then((dbResponse) => {
                console.log(dbResponse);
            }).catch((error) => {
                console.error(error);
                process.exit(0); 
            });
        }
        console.log(`Express Server is started at ${port}`);
    });
}
