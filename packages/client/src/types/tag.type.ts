import { HeroIconName } from 'ng-heroicon';
import { Schema, z } from 'zod';

export const Tag = z.object({
  text: z.string(),
  iconName: z.custom<HeroIconName>(),
  value: z.string(),
});

export type Tag = z.infer<typeof Tag>;
