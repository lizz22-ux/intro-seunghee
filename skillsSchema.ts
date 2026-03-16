import { z } from "zod";

const itemSchema = z.object({
  name: z.string(),
  image: z.string(),
});

export const skillsSchema = z.object({
  interests: z.array(itemSchema),
  currentTools: z.array(itemSchema),
  futureTech: z.array(itemSchema)
});

export type Skills = z.infer<typeof skillsSchema>;
export type SkillItem = z.infer<typeof itemSchema>;