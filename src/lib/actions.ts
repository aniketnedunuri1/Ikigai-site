"use server"
import { z } from "zod";
import { sql } from '@vercel/postgres';

const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    selectedTypes: z.array(z.string()).min(1, "At least one clothing type must be selected"),
    details: z.string().optional(),
});

type FormData = z.infer<typeof FormSchema>;

export async function submitForm(data: FormData) {
  const parsedData = FormSchema.safeParse(data);

  if (!parsedData.success) {
      console.error("Validation failed:", parsedData.error.format());
      throw new Error("Validation failed: " + JSON.stringify(parsedData.error.format()));
  }

  try {
      const { name, email, phone, selectedTypes, details } = parsedData.data;

      const formattedSelectedTypes = `{${selectedTypes.join(',')}}`;

      const result = await sql`
          INSERT INTO form_submissions (name, email, phone, selected_types, details)
          VALUES (${name}, ${email}, ${phone}, ${formattedSelectedTypes}, ${details})
          RETURNING *;
      `;

      console.log("Form data saved:", result.rows[0]);

      return {
          success: true,
          message: "Form submitted successfully!",
          data: result.rows[0],
      };
  } catch (error: any) {
      console.error("Failed to submit form:", error);
      throw new Error("Failed to submit form: " + error.message);
  }
}
