import { MongoClient } from "mongodb";

export default async function () {
  const url = "mongodb://127.0.0.1:27017";
  return await new MongoClient(url).connect();
}
