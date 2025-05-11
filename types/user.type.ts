import { z } from 'zod';

export const accountSchema = z.object({
    id: z.string(),
    accounId: z.string(),
    providerId: z.string(),
    user: z.custom<UserType>(),
    accessToken: z.string().optional(),
    refreshToken: z.string().optional(),
    idToken: z.string().optional(),
    accessTokenExpiresAt: z.date().optional(),
    refreshTokenExpiresAt: z.date().optional(),
    scope: z.string().optional(),
    password: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
});
export type AccountType = z.infer<typeof accountSchema>;

export const userSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    email: z.string().email(),
    emailVerified: z.boolean(),
    password: z.string(),
    image: z.string().url().optional(),
    posts: z.array(z.string()).optional(),
    recipes: z.array(z.string()).optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
});
export type UserType = z.infer<typeof userSchema>;