import express, { json } from 'express';
import { classesRouter } from './routes/classes.js';

const port = 3001;

const app = express();
app.use(json());

app.use('/classes', classesRouter);

app.listen(port, () => {
  console.info(`Application listening on http://localhost:${port}`);
});
