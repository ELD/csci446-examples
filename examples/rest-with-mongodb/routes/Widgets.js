import express from "express";
import { ObjectId } from "mongodb";

const WidgetsRouter = express.Router();

WidgetsRouter.get("/", async function (req, res) {
  const db = await req.app.get("db")("widgets");
  const widgets = await db.find().toArray();
  res.json(widgets);
});

WidgetsRouter.post("/", async function (req, res) {
  const db = await req.app.get("db")("widgets");
  let newWidget = req.body;
  try {
    await db.insertOne(newWidget);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
});

WidgetsRouter.put("/:id", async function (req, res) {
  const db = await req.app.get("db")("widgets");
  let updatedWidget = req.body;
  try {
    await db.replaceOne({ _id: new ObjectId(req.params.id) }, updatedWidget);
    res.sendStatus(200).send(updatedWidget);
  } catch (e) {
    console.log(e);
  }
});

export default WidgetsRouter;
