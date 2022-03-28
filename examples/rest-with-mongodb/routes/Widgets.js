import express from "express";

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

export default WidgetsRouter;
