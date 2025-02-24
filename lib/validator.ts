import { z } from "zod";

export const driverFormSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  pickUpDate: z.date({
    required_error: "Pickup date is required",
  }),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  returnDate: z.date({
    required_error: "Return date is required",
  }),
  phoneNo: z.string()
    .min(1, "Phone number is required")
    .regex(/^(\+251|0)(9|7)[0-9]{8}$/, "Invalid Ethiopian phone number format. Use +251 or 0 followed by 9 digits")
    .transform(val => val.startsWith("0") ? "+251" + val.slice(1) : val), // Convert 0 format to +251 format
  licenseNumber: z.string().min(6, "Licence number must be at least 6 characters"),
  FIN: z.string().min(12, "FIN must be 12 characters").max(12, "FIN must be 12 characters"),
  licenseValidtill: z.string()
    .refine((val) => {
      const currentYear = new Date().getFullYear();
      const inputYear = parseInt(val);
      return inputYear >= currentYear - 7; // Must be current year or future
    }, "License must be valid (not expired)")
    .refine((val) => /^\d{4}$/.test(val), "Year must be 4 digits")

}).refine(
  (data) => {
    // Ensure both dates are provided before comparison
    if (!data.pickUpDate || !data.returnDate) return false;
    
    return data.returnDate > data.pickUpDate;
  },
  {
    message: "Return date must be after pickup date",
    path: ["returnDate"], // This will show the error on the return date field
  }
);
