import { z } from "zod";

export const categSchema = z.object({
    categorypostId:     z.string(),
    name:               z.string(),
});

export type categSchema = z.infer<typeof categSchema>;