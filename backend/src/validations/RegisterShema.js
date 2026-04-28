import z from 'zod';

const RegisterShema = z.object({
    firstName: z.string().min(1, "First name is required"),

    lastName: z.string().min(1, "Last name is required"),

    email: z.string().email("Invalid email"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    phone: z.string().startsWith('0').min(10,'invalid phone number').max(10,'invalid phone number').optional(),
}).refine(
  (data) => data.firstName !== data.lastName,
  {
    message: "First name and last name must be different",
    path: ["lastName"], 
  }
);

export default RegisterShema;