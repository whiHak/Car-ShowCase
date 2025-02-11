import { z } from "zod";

export const driverFormSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  pickupDate: z.date().nullable(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  returnDate: z.date().nullable(),
});
