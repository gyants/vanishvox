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

        return new Response(JSON.stringify(post), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all posts", {
            status: 500
        })
    }
}