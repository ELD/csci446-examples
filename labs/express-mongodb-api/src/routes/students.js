import { Router } from 'express';

// This is an extension of the main thrust of the lab. You may flesh out more endpoints and then _nest_ them under
// the classes route.
//
// The intent is to experiment with relations in MongoDB. See the documentation on embedding documents
// [Embedded documents](https://www.mongodb.com/basics/embedded-mongodb)
// [Embedded documents documentation](https://www.mongodb.com/docs/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/)
const studentsRouter = Router();

export { studentsRouter };
