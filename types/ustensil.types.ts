import { z } from "zod";
import type { RecipeType } from "./recipe.types";
import type{ MediaType } from "./media.types";

export const ustensilSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    image: z.custom<MediaType>(),
    recipes: z.array(z.custom<RecipeType>()).optional(),
    steps: z.array(z.string()).optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type UstensilType = z.infer<typeof ustensilSchema>;