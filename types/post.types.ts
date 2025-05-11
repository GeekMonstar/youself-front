import { z } from 'zod';
import type { MediaType } from './media.types';
import type { RecipeType } from './recipe.types';
import { UserType } from './user.type';

export const postSchema = z.object({
    id: z.string(),
    content: z.string(),
    medias:  z.array(z.custom<MediaType>()),
    recipe: z.custom<RecipeType>().optional(),
    author: z.custom<UserType>(),
    created_at: z.string(),
    updated_at: z.string(),
})

export type PostType = z.infer<typeof postSchema>;