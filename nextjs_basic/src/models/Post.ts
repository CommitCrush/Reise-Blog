import mongoose, { Schema, models, model, Model } from "mongoose";

export interface IPost extends Document {
	title: string;
	content: string;
	author: mongoose.Types.ObjectId;
	imageUrl?: string;
	 likes: string[]; // Array von User-IDs, die geliked haben
	createdAt: Date;
	updatedAt: Date;
}

const postSchema = new Schema<IPost>(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		   imageUrl: {
        type: String,
        required: false,
    },
	likes: [
            {
                type: String, // User-ID als String
            },
        ],
	},
	{
		timestamps: true,
	}
);

const Post: Model<IPost> = models.Post || model<IPost>("Post", postSchema);
export default Post;
