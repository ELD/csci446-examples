import { Router } from "express";
import * as fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const ProjectsRouter = Router();

ProjectsRouter.get("/projects", async (request, response) => {
  let todoResponse = [];
  const directory = await fs.readdir("storage/");
  for (const file of directory) {
    todoResponse.push(
      JSON.parse(
        await fs.readFile(`storage/${file}`)
      )
    );
  }
  response.json(todoResponse);
});

ProjectsRouter.get("/projects/:id", async (req, res) => {
  const projectsFile = await fs.open(`storage/${req.params.id}.json`);
  if (!projectsFile) {
    return res.status(404).end();
  }
  const project = JSON.parse(await projectsFile.readFile("utf-8"));

  res.json(project);

  await projectsFile.close();
});

ProjectsRouter.post("/projects", async (req, res) => {
  req.body.id = uuidv4();
  await fs.writeFile(`storage/${req.body.id}.json`, JSON.stringify(req.body), {
    encoding: 'utf-8',
    flag: 'w',
  });
  res.status(201).end();
});

ProjectsRouter.put("/projects/:id", async (req, res) => {
  await fs.writeFile(`storage/${req.params.id}.json`, JSON.stringify(req.body), {
    encoding: 'utf-8',
    flag: 'w',
  });
  res.status(200).json(req.body);
});

ProjectsRouter.delete("/projects/:id", async (req, res) => {
  await fs.rm(`storage/${req.params.id}.json`);
  res.status(200).json(req.body);
});

export default ProjectsRouter;

