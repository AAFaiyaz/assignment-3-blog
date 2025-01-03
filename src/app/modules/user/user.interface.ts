import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type User = {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
};
