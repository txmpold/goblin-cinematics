import z from "zod";

export const FormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),
  email: z.email("Invalid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters long")
    .max(100, "Subject must be at most 100 characters long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be at most 500 characters long"),
});

export type Form = z.infer<typeof FormSchema>;
