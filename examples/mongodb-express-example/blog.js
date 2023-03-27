import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'node:fs/promises';
import { connectMongodb } from './util.js';
import { ObjectId } from 'mongodb';


const blogRouter = Router();

blogRouter.get('/', async (req, res) => {
  const directoryContents = await fs.readdir('storage/');
  const allPosts = {
    posts: [],
    count: directoryContents.length
  };

  for (const entry of directoryContents) {
    const contents = await fs.readFile(`storage/${entry}`);
    allPosts.posts.push(JSON.parse(contents));
  }

  res.send(allPosts);
});

blogRouter.get('/:postId', async (req, res) => {
  // Every Request object (`req` argument) contains a reference to the Express `Application` type
  // We can use this to access attached settings (or values), such as our database.
  // See index.js:13 for where we set this
  const db = req.app.get("db");

  const postId = req.params.postId;
  let queryableId;

  // In class, we created a conflicting state where one record used the `ObjectId` and another record used a
  // string UUID. We can parse the user-supplied ID to determine if we should treat it as a string or an `ObjectId`.
  try {
    queryableId = new ObjectId(postId);
  } catch (e) {
    queryableId = postId;
  }
  try {
    const post = await db.collection('posts').findOne({ _id: queryableId });
    if (post === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }
    // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
    // Express' `Response` object
    res.json(post);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

blogRouter.post("/new", async (req, res) => {
  const db = req.app.get("db");

  const requestBody = req.body;
  requestBody._id = uuidv4();

  try {
    const result = await db.collection('posts').insertOne(requestBody);
    console.log(result);
    res.status(201);
    res.json({
      status: 201,
      message: 'created',
    });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({
      status: 500,
      message: e,
    });
  }
})

blogRouter.delete("/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    await fs.unlink(`storage/${postId}.json`);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({
      status: 500,
      message: "Internal server error",
    });
  }
});

export default blogRouter;
