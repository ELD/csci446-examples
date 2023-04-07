import express from "express";

const port = 3001;
const app = express();

const projectRouter = express.Router();
const todoRouter = express.Router();

projectRouter.get("/:projectId", (req, res) => {
  res.send('');
});

todoRouter.get("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const projectId = req.params.projectId;

  console.log(todoId, projectId);
  res.json({
    projectId: projectId,
    todoId: todoId,
  });
});

projectRouter.use("/:projectId/todo", todoRouter);

app.use("/project", projectRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

