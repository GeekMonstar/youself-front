/* eslint-disable @next/next/no-img-element */
import { JSX } from "react";
import Link from "next/link";
import type { PostType } from "@/types/post.types";
import type { RecipeType } from "@/types/recipe.types";
import Avatar from "../ui/avatar";
import { Heart, MessageSquare, Repeat2, Clock } from "lucide-react";
import { minutesToHours, limitStringLength } from "@/lib/utils";

export default function PostCard({post}: {post: PostType}): JSX.Element {
    const { content, medias, recipe, created_at } = post;
    const date = new Date(created_at);
    return (
        <div className="w-full flex flex-col bg-white rounded-lg p-4 border border-zinc-200">
            <div className="flex flex-row gap-2 items-center">
                <Avatar src={post.author.image} alt={post.author.name ? post.author.name : "avatar"} size="w-12 h-12" />
                <div className="flex flex-col">
                    <h2 className="text-lg">{post.author.name}</h2>
                    <p className="text-sm text-gray-500">{date.toLocaleDateString()}</p>
                </div>
            </div>
            <div className="mt-2">
                <p className="text-gray-700">{content}</p>
                {medias && medias.length > 0 && (
                    <div className="mt-2">
                        {medias.map((media) =>
                            media.type === "image" ? (
                                <img key={media.id} src={media.src} alt={media.alt} className="w-full h-auto rounded-lg" />
                            ) : (
                                <video key={media.id} src={media.src} controls className="w-full h-auto rounded-lg" />
                            )
                        )}
                    </div>
                )}
            </div>
            {recipe && <RecipePost recipe={recipe} />}
            <div className="flex items gap-6">
                <button className="flex items-center gap-1 mt-2 cursor-pointer">
                    <Heart className="w-4 h-4" />0
                </button>
                <button className="flex items-center gap-1 mt-2 cursor-pointer">
                    <MessageSquare className="w-4 h-4" />0
                </button>
                <button className="flex items-center gap-1 mt-2 cursor-pointer">
                    <Repeat2 className="w-4 h-4" />0
                </button>

            </div>
        </div>
    );
}

function RecipePost({recipe}: {recipe: RecipeType}): JSX.Element {
    return (
        <div className="flex gap-2 rounded-lg bg-zinc-100 p-2 mt-2 relative">
            <img src={recipe.medias[0].src} alt={recipe.name} className="size-32 rounded-sm object-center" />
            <div className="flex flex-col">
                <h3 className="text-lg">{recipe.name}</h3>
                <p className="text-sm text-zinc-600">{limitStringLength(recipe.description, 200)}</p>
                <div className="flex flex-row mt-2">
                    <div className="flex items-center gap-1"><Clock className="size-4"/>{minutesToHours(recipe.preparationDuration + recipe.cookingDuration)}</div>
                </div>
            </div>
            <Link href={`/recipes/${recipe.id}`} className="absolute w-full h-full top-0 right-0"></Link>
        </div>
    )
}

