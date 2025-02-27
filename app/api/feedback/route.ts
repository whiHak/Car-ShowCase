import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createPost } from '@/lib/actions/post.actions';

// Match the schema with your CreatePostParams type
const feedbackFormSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  feedback: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    // Get the request body
    const body = await request.json();
    
    // Validate the input
    const validatedData = feedbackFormSchema.parse(body);
    
    // Call the existing createPost action
    const result = await createPost(validatedData);
    
    if (result.success) {
      return NextResponse.json(
        { message: result.message },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: result.message },
        { status: 400 }
      );
    }
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data" },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
