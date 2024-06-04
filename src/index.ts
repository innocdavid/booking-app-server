import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/api/test", async (req: Request, res: Response) => {
    res.status(201).json({ message: "Hello from the server"});
});

app.listen(8080, () => {
    console.log('server listening at 127.0.0.1:8080');
});