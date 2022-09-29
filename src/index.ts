import express, { NextFunction, Request, Response } from "express";
import { notesRouter } from "./routes/notes";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/notes", notesRouter);

app.get("/", (req: Request, res: Response) => {
    return res.send("Hello from express app!");
});

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
