import express from "express";

const UserRouter = express.Router();

UserRouter.get("/", async function (req, res) {
  const db = await req.app.get("db")("users");
  const users = await db.find().toArray();
  res.json(users);
});

export default UserRouter;
