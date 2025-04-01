import { z } from "zod";
export const contactFormSchema = z.object({
  username: z
    .string()
    .min(1, "Name cannot be empty")
    .max(32, "Name cannot be too long"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(280, "Message cannot be too long"),
});
