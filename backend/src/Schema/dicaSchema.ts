import { z } from "zod";

export const DicaSchema = z.object({
  categoria: z.string(),
});

export type DicaData = z.infer<typeof DicaSchema>;