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

ClassesRouter.patch("/:class_id", async (req, res) => {
  const db = await req.app.get("db")("classes");
  await db.updateOne({ _id: Number(req.params.class_id) }, { $set: req.body });
  const updatedClass = await db.findOne({ _id: Number(req.params.class_id) });

  res.status(200).json(updatedClass);
});

ClassesRouter.get("/:class_id/students", async (req, res) => {
  const classes_students = await req.app.get("db")("classes_students");
  const students = await req.app.get("db")("students");
  const classes = await classes_students
    .find({ class_id: Number(req.params.class_id) })
    .toArray();
  const studentsInClass = await Promise.all(
    classes.map(
      async (classe) => await students.findOne({ _id: classe.student_id })
    )
  );

  res.json(studentsInClass);
});

export default ClassesRouter;
