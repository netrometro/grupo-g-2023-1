import { z } from "zod";

const categSchema = z.object({
    name: z.string(),
});

export type categSchema = z.infer<typeof categSchema>;