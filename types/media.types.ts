import {z} from 'zod';

export const media = z.object({
    id: z.string(),
    type: z.enum(['image', 'video']),
    content: z.string(),
    alt: z.string(),
    src: z.string().url(),
    createdAt: z.date(),
    updatedAt: z.date(),
    mediaUrl: z.string().url(),
    mediaType: z.enum(['image', 'video']),
})

export type MediaType = z.infer<typeof media>;