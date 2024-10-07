"use server"
import { z } from "zod";
import { sql } from '@vercel/postgres';

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    // selectedTypes: z.array(z.string()).min(1, "At least one clothing type must be selected"),
    details: z.string().optional(),
});

type FormData = z.infer<typeof FormSchema>;



const FormSchemaMailingList = z.object({
    name: z.string().optional(),
    email: z.string().email("Invalid email address"),

});

type FormDataMailingList = z.infer<typeof FormSchemaMailingList>;

export async function submitForm(data: FormData) {
  const parsedData = FormSchema.safeParse(data);

  if (!parsedData.success) {
      console.error("Validation failed:", parsedData.error.format());
      throw new Error("Validation failed: " + JSON.stringify(parsedData.error.format()));
  }

  try {
      const { name, email, phone, details } = parsedData.data;

    //   const formattedSelectedTypes = `{${selectedTypes.join(',')}}`;

        const data = await prisma.ikigaiRequests.create({
            data: {
                name: name,
                email: email,
                phone: phone,
                details: details,
                timestamp: new Date(),
            }
        })

        console.log("[Form Actions] Saved Form Data", data)
      return {
          success: true,
          message: "Form submitted successfully!",
          data: data,
      };
  } catch (error: any) {
      console.error("Failed to submit form:", error);
      throw new Error("Failed to submit form: " + error.message);
  }
}



export async function submitMailingListForm(data: FormDataMailingList) {
    const parsedData = FormSchema.safeParse(data);
  
    if (!parsedData.success) {
        console.error("Validation failed:", parsedData.error.format());
        throw new Error("Validation failed: " + JSON.stringify(parsedData.error.format()));
    }
  
    try {
        const { name, email } = parsedData.data;
  
      //   const formattedSelectedTypes = `{${selectedTypes.join(',')}}`;
  
          const data = await prisma.emailList.create({
              data: {
                  name: name,
                  email: email,

              }
          })
  
          console.log("[Form Actions] Saved Form Data", data)
        return {
            success: true,
            message: "Form submitted successfully!",
            data: data,
        };
    } catch (error: any) {
        console.error("Failed to submit form:", error);
        throw new Error("Failed to submit form: " + error.message);
    }
  }
  
  
  
