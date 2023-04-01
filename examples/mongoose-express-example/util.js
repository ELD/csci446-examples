import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

export const Post = mongoose.model('posts', {
  _id: mongoose.SchemaTypes.String,
  title: mongoose.SchemaTypes.String,
  body: mongoose.SchemaTypes.String
});
