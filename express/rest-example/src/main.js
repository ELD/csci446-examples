import express, { Router } from "express";
import { app as ProjectsRouter } from "./projects.js";

const port = 3001;

const app = express();
app.use(express.json());

app.use(ProjectsRouter);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
});
