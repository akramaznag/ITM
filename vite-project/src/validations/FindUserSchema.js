import z from "zod";

const FindUserSchema = z
  .object({
    id: z.int().positive().optional(),

    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .trim()
      .toLowerCase()
      .optional(),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .trim()
      .toLowerCase()
      .optional(),

    userName: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .trim()
      .toLowerCase()
      .optional(),
  })

  .refine(
    (data) => data.id || data.firstName || data.lastName || data.userName,
    {
      message: "At least one search field must be provided",
    }
  )

  .refine(
    (data) => {
      if (data.firstName && data.lastName) {
        return data.firstName !== data.lastName;
      }
      return true;
    },
    {
      message: "First name and last name must be different",
      path: ["lastName"],
    }
  );

export default FindTechnicianSchema;