import { MongoClient } from "mongodb";

export async function connectMongodb() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();

  return client.db('auth');
}
