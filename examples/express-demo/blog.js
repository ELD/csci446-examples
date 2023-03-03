import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'node:fs/promises';

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
  const postId = req.params.postId;
  try {
    const post = await fs.readFile(`storage/${postId}.json`);
    res.json(JSON.parse(post));
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

blogRouter.post("/new", async (req, res) => {
  const requestBody = req.body;
  requestBody.id = uuidv4();
  await fs.writeFile(`storage/${requestBody.id}.json`, JSON.stringify(requestBody));
  res.status(201);
  res.send('');
})

export default blogRouter;
