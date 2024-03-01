import express from "express";
import cors from "cors";

const port = 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`)
});

