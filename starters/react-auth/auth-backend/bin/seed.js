import { connectMongodb } from "../utils/db.js";
import bcrypt from 'bcrypt';

const db = await connectMongodb();

const username = 'johndoe';
const password = 'password';
const passwordHash = await bcrypt.hash(password, 10);

const existingUsers = await db.collection('users').find().toArray();

if (existingUsers.find((doc) => doc.username === 'johndoe')) {
  console.warn('already seeded database, exiting');
  process.exit(1);
}

const result = await db.collection('users').insertOne({
  username,
  passwordHash
});

console.info('seed result: ', result);

process.exit(0);
