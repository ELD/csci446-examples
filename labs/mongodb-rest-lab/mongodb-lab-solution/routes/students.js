import express from "express";

const StudentsRouter = express.Router();

StudentsRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("students");
  const students = await db.find().toArray();

  res.json(students);
});

StudentsRouter.get("/:student_id", async (req, res) => {
  const db = await req.app.get("db")("students");

  const classe = await db.findOne({ _id: Number(req.params.student_id) });

  res.json(classe);
});

StudentsRouter.post("/", async (req, res) => {
  const db = await req.app.get("db")("students");
  const createdClass = req.body;
  db.insertOne(createdClass);

  res.status(201).json(createdClass);
});

StudentsRouter.put("/:student_id", async (req, res) => {
  const db = await req.app.get("db")("students");
  const replacedClass = req.body;
  await db.replaceOne(
    {
      _id: Number(req.params.student_id),
    },
    {
      ...replacedClass,
    }
  );

  res.json(replacedClass);
});
StudentsRouter.delete("/:student_id", async (req, res) => {
  const db = await req.app.get("db")("students");
  await db.deleteOne({ _id: Number(req.params.student_id) });
  res.sendStatus(200);
});

StudentsRouter.patch("/:student_id", async (req, res) => {
  const db = await req.app.get("db")("students");
  await db.updateOne(
    { _id: Number(req.params.student_id) },
    { $set: req.body }
  );
  const updatedClass = await db.findOne({ _id: Number(req.params.student_id) });

  res.status(200).json(updatedClass);
});

export default StudentsRouter;
