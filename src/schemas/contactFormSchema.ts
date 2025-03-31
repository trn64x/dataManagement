import { z } from "zod";
export const contactFormSchema = z.object({
  username: z.string().min(1, "Name cannot be empty"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message cannot be empty"),
});