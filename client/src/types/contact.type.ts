import { Schema, z } from 'zod';

export const Contact = z.object({
  name: z.string(),
  imageId: z.string().uuid().optional(),
});

export type Contact = z.infer<typeof Contact>;
