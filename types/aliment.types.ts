import { z } from "zod";
import type { MediaType } from "./media.types";
import type { StepType } from "./step.types";

export const alimentSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.custom<MediaType>(),
    steps: z.array(z.custom<StepType>()).optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type AlimentType = z.infer<typeof alimentSchema>;