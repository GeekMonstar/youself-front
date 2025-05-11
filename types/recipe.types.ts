import { z } from 'zod'
import type { MediaType } from './media.types'

export const recipeSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    ingredients: z.array(z.string()),
    steps: z.array(z.custom<MediaType>()),
    media: z.array(z.custom<MediaType>()),
    duration: z.number(),
    difficulty: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export type RecipeType = z.infer<typeof recipeSchema>