import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Post } from './util.js';


const blogRouter = Router();

blogRouter.get('/', async (req, res) => {
  const posts = await Post.find();

  res.send(posts);
});

blogRouter.get('/:postId', async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findOne({ _id: postId });
    console.log(post);
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
  const requestBody = req.body;
  requestBody._id = uuidv4();

  try {
    const result = await new Post(requestBody).save();
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
    await Post.deleteOne({ _id: postId });
    res.json({});
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
