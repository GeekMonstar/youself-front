// "use client";
import { use } from "react";
import { getPosts } from "./action";
import PostCard from "@/components/cards/post";

export default function Home() {
  // useEffect(() => {
  //   const posts = use(getPosts());
  //   console.log(posts);
  // }, []);
  const posts = use(getPosts()) || [];
  console.log(posts);
  return (
    <div className="w-full flex flex-row gap-2 ml-2">
      <div className="w-full lg:w-7/12 flex flex-col h-screen gap-2">
        {posts.map((post) => PostCard({ post }))}
      </div>
      <div className="hidden md:flex md:w-5/12 bg-blue-500"></div>
    </div>
  );
}
