import { connectToDB } from "@/lib/mongoose";
import Post from "@/lib/models/post";

export const maxDuration = 10; // This function can run for a maximum of 300 seconds
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const post = await Post.findById(params.id);

        if(!post) return new Response("Post not found", {
            status: 404
        });

        return new Response(JSON.stringify(post.replies), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all replies", {
            status: 500
        })
    }
}

export const POST = async (request, { params }) => {
    try {
        await connectToDB();

        const post = await Post.findById(params.id);

        if (!post) {
            return new Response("Post not found", { status: 404 });
        }

        // Extract the reply data from the request body
        const { message } = await request.json(); // Assuming reply is in the format { message: "Your reply" }

        // Ensure that a message is provided
        if (!message) {
            return new Response("Reply message is required", { status: 400 });
        }

        // Add the reply to the post's replies array
        post.replies.push({ message }); // Creating an object with the 'message' field

        // Save the updated post
        await post.save();

        return new Response(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new Response("Failed to add reply", { status: 500 });
    }
}
