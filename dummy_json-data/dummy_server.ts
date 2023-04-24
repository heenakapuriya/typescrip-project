import express, { Application, Request, Response } from 'express';
import productRouter from './Router/productRouter';


const app: express.Application = express()

const hostname: string = "127.0.0.1";
const port: number = 8083;
app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "Welcome to Home Page......" })
})

app.use("/api/product", productRouter);



app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
})