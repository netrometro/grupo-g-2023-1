import { z } from "zod";

const infopSchema = z.object({
    title:          z.string(),
    text:           z.string(),
    categorypostId: z.number(),
});

export type infopSchema = z.infer<typeof infopSchema>;