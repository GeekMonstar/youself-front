import { postSchema } from "@/types/post.types";

export async function getPosts() {
    try{
        const res = await fetch('http://localhost:4000/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        // const data = await res.json();
        const data = postSchema.array().parse(await res.json());
        return data;
    }catch (error) {
        console.error('Error fetching posts:', error);
        return null;
    }
}