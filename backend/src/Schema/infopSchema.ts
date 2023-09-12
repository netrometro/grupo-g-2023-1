import { z } from "zod";

export const infopSchema = z.object({
    infopostId:         z.number(),
    title:              z.string(),
    text:               z.string(),
});

export type infopSchema = z.infer<typeof infopSchema>;