import express from 'express';
import cors from 'cors';
import blogRouter from './blog.js';

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

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
