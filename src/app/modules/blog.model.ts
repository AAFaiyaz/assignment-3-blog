import { Schema, model, connect } from 'mongoose';
import { Blog } from './blog/blog.interface';

// 2. Create a Schema corresponding to the document interface.
const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isPublished: { type: Boolean, required: true },
  },
  { timestamps: true },
);

// 3. Create a Model.
export const BlogModel = model<Blog>('Blog', blogSchema);
