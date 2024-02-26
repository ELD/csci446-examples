import express from "express";

const port = 3001;

const app = express();
app.use(express.json());

const projects = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
];

app.get("/projects", (request, response) => {
  response.json(projects);
});

app.get("/projects/:id", (req, res) => {
  const project = projects.filter((p) => p.id === Number(req.params.id))[0];
  if (!project) {
    return res.status(404).end();
  }

  res.json(project);
});

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`)
});

