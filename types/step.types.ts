import { z } from 'zod';
import type { MediaType } from './media.types';

export const stepSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    medias: z.custom<MediaType>(),
    duration: z.number(),
    order: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type StepType = z.infer<typeof stepSchema>;