import express, { Application, Request, Response } from "express";
import cors from "cors";
import {registerUsers, singin} from "./Constrollers/UserController"

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

//usuarios papu
app.post("/users/create",registerUsers)
app.post("/users/login",singin)

export default app;