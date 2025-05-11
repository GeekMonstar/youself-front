import { z } from 'zod';
import { AlimentType } from './aliment.types';

export const ingredientSchema = z.object({
    id: z.string(),
    name: z.string(),
    aliment: z.custom<AlimentType>(),
    quantity: z.number(),
    unit: z.enum(['g', 'kg', 'ml', 'l', 'cl', 'dl', 'tsp', 'tbsp', 'cup', 'oz', 'lb']),
    recipeId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export type IngredientType = z.infer<typeof ingredientSchema>