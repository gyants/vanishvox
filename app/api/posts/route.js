import { connectToDB } from "@/lib/mongoose";
import Post from "@/lib/models/post";

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