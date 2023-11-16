import { connectToDB } from "@/lib/mongoose";
import Post from "@/lib/models/post";

export const POST = async(req) => {
    const { message } = await req.json();

    try {
        await connectToDB();
        const newPost = new Post({
            message,
        })

        await newPost.save();

        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new post", { status: 500 })
    }
}