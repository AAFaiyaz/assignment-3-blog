import { Schema, model, connect, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Blog = {
  title: string;
  content: string;
  author: Types.ObjectId;
  role: 'admin' | 'user';
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
};
