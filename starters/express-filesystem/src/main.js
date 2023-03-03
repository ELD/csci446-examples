import express from 'express';

const port = 3001;
const app = express();

// Use the JSON parsing middleware so we can access it via `req.body`
app.use(express.json());

// TODO: Attach your `todos` router here

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
})
