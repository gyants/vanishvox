import { connectToDB } from "@/lib/mongoose";
import Post from "@/lib/models/post";

export const maxDuration = 10; // This function can run for a maximum of 300 seconds
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async (request) => {
    try {
        await connectToDB();

        const posts = await Post.find();

        return new Response(JSON.stringify(posts), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all posts", {
            status: 500
        })
    }
}