import express from "express";

const ClassesRouter = express.Router();

ClassesRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("classes");
  const classes = await db.find().toArray();

  res.json(classes);
});

ClassesRouter.get("/:class_id", async (req, res) => {
  const db = await req.app.get("db")("classes");
  const classId = req.params.class_id;

  const classe = await db.findOne({ _id: Number(classId) });

  res.json(classe);
});

ClassesRouter.post("/", async (req, res) => {
  const db = await req.app.get("db")("classes");
  const createdClass = req.body;
  db.insertOne(createdClass);

  res.status(201).json(createdClass);
});

ClassesRouter.put("/:class_id", async (req, res) => {
  const db = await req.app.get("db")("classes");
  const replacedClass = req.body;
  await db.replaceOne(
    {
      _id: Number(req.params.class_id),
    },
    {
      ...replacedClass,
    }
  );

  res.json(replacedClass);
});
ClassesRouter.delete("/:class_id", async (req, res) => {
  const db = await req.app.get("db")("classes");
  await db.deleteOne({ _id: Number(req.params.class_id) });
  res.sendStatus(200);
});
// ClassesRouter.patch("/:class_id", async (req, res) => {});

export default ClassesRouter;
