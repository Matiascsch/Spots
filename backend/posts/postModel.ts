import mongoose, { Document, Schema } from 'mongoose';

export interface IPost extends Document {
    title: string;
    content: string;
    author: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const postSchema = new Schema<IPost>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;