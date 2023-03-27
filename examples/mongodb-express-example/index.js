import express from 'express';
import cors from 'cors';
import blogRouter from './blog.js';
import { connectMongodb } from './util.js';

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());
// Connect to the MongoDB database once and attach the connection pool to the application instance
const db = await connectMongodb();
app.set("db", db);

app.get("/", (req, res) => {
  console.log(req, res);
  res.json({
    code: 200,
    message: "Hello, Express",
  });
});

app.use('/blog', blogRouter);

app.listen(port, () => {
  console.log(`listening on localhost:${port}...`);
})
