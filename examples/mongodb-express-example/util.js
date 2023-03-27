import { MongoClient } from 'mongodb';

// We stick this function in the `util.js` file to avoid cyclical imports and as a convention
// for anything not directly related to the application
export async function connectMongodb() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();

  return client.db('blog');
}
