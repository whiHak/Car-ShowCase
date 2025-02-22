import { z } from "zod";

export const driverFormSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  pickupDate: z.date({
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
  phoneNo: z.string().min(1, "Phone number is required"),
  licenceNo: z.string().min(6, "Licence number must be at least 6 characters"),
  FIN: z.string().min(12, "FIN must be 12 characters").max(12, "FIN must be 12 characters"),
}).refine(
  (data) => {
    // Ensure both dates are provided before comparison
    if (!data.pickupDate || !data.returnDate) return false;
    
    return data.returnDate > data.pickupDate;
  },
  {
    message: "Return date must be after pickup date",
    path: ["returnDate"], // This will show the error on the return date field
  }
);
