import express from "express";

const port = 3001;

const app = express();
app.use(express.json());

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`)
});

