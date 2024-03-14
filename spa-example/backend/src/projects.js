import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { ObjectId } from "mongodb";

const ProjectsRouter = Router();

ProjectsRouter.get("/projects", async (req, res) => {
	const db = req.app.get("db");
	const todos = await db.collection("projects").find().toArray();

  return res.json(todos);
});

ProjectsRouter.get("/projects/:id", async (req, res) => {
	const db = req.app.get("db");
	const todo = await db.collection("projects").findOne({ _id: new ObjectId(req.params.id) });

	return res.json(todo);
});

ProjectsRouter.post("/projects", async (req, res) => {
	const db = req.app.get("db");

	try {
		const result = await db.collection("projects").insertOne(req.body);
		console.info(result);
		res.status(201).json(result.insertedId);
	} catch (e) {
		console.error(e);
		return res.status(500).end();
	}
});

ProjectsRouter.put("/projects/:id", async (req, res) => {
	req.body._id = req.params.id;
	const db = req.app.get("db");
	try {
		const updateResult = await db.collection("projects").update({ _id: new ObjectId(req.params.id) }, req.body);
		console.info(updateResult);
	} catch (e) {
		console.error(e);
		return res.status(500).end();
	}

	return res.status(200).end();
});

ProjectsRouter.delete("/projects/:id", async (req, res) => {
	const db = req.app.get("db");
	try {
		await db.collection("projects").deleteOne({ _id: new ObjectId(req.params.id) });
	} catch (e) {
		console.error(e);
		return res.status(500).end();
	}

	return res.status(200).end();
});

export default ProjectsRouter;

