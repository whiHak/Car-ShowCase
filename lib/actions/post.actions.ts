"use server";

import { connectToDatabase } from "../database";
import Post from "../database/models/post.model";

type CreatePostParams = {
    fullName: string;
    email: string;
    feedback: string;
}

export const createPost = async(post: CreatePostParams)=> {
    try {
        await connectToDatabase();

        const newPost = await Post.create(post);
        if(!newPost) throw new Error("Failed to create post");
        
        return { success: true, message: "Feedback submitted successfully" };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to submit feedback" };
    }
}

