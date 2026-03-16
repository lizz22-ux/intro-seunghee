import { z } from "zod";

export const profileSchema = z.object({
  name: z.string(),
  greeting: z.string(),
  bio: z.string(),
  profileImage: z.string(),
  keywords: z.array(z.string())
});

export type Profile = z.infer<typeof profileSchema>;
