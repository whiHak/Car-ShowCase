import { model, models, Schema } from "mongoose";

const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = models.Post || model("Post", postSchema);

export default Post;
