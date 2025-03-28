import express, { json, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOption from "@/config/cors.config";

const app = express();

app.use(cors(corsOption));
app.use(json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, typescript with express");
});

app.all("*", (_, res: Response) => {
  res.status(404).json({ message: "404! Resource not found" });
});

export default app;
