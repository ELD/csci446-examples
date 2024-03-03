import { Router } from "express";
import { open } from "node:fs/promises";

const app = Router();

app.get("/projects", async (request, response) => {
  const projectsFile = await open("data/store.json");
  const projects = JSON.parse(await projectsFile.readFile("utf-8"));
  projectsFile.close();
  response.json(projects);
});

app.get("/projects/:id", async (req, res) => {
  const projectsFile = await open("data/store.json");
  const projects = JSON.parse(await projectsFile.readFile("utf-8"));
  const project = projects.filter((p) => p.id === Number(req.params.id))[0];
  if (!project) {
    return res.status(404).end();
  }

  projectsFile.close();

  res.json(project);
});

app.put("/projects/:id", async (req, res) => {
  const projectsFile = await open("data/store.json", "r+");
  const projects = JSON.parse(await projectsFile.readFile("utf-8"));

  const updatedProject = req.body;
  updatedProject.id = req.params.id;
  projects[req.params.id - 1] = updatedProject;

  await projectsFile.writeFile(JSON.stringify(projects));
  await projectsFile.close();
  res.status(200).json(updatedProject);
});

export default app;

