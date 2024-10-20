"use server"
import { z } from "zod";
import { sql } from '@vercel/postgres';
import { PrismaClient } from "@prisma/client";
import { Resend } from 'resend';
import { getMaxListeners } from "events";

const resend = new Resend('re_SAjvryp6_3vVeEwi2mEiUgX29SU9WAgyL');
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

        const response = await prisma.ikigaiRequests.create({
            data: {
                name: name,
                email: email,
                phone: phone,
                details: details,
                timestamp: new Date(),
            }
        })

        // const { data, error } = await resend.emails.send({
        //     from: 'Acme <admin@couturebyikigai.com>',
        //     to: ['aniketn16@gmail.com', 'areebk@umich.edu', 'couturebyikigai@gmail.com'],
        //     subject: `${response.name} just signed up. Their email is: ${response.email}, and phone is ${response.phone}`,
        //     html: '<strong>It works!</strong>',
        // });

        // const { abc, error } = await resend.emails.send({
        //     from: 'Couture by Ikigai <couturebyikigai@gmail.com>',
        //     to: [`${response.email}`],
        //     subject: `Thanks for reaching out to Couture by Ikigai! We will reach out shortly`,
        //     html: '<strong>We will reach out shortly</strong>',
        // });

        const {data, error } = await resend.batch.send([
            {
              from: 'Acme <admin@couturebyikigai.com>',
              to: ['couturebyikigai@gmail.com'],
              subject: `${response.name} just signed up. Their email is: ${response.email}, and phone is ${response.phone}`,
              replyTo: 'couturebyikigai@gmail.com',
              html: '<h1>it works!</h1>',
            },
            {
              from: 'Acme <admin@couturebyikigai.com>',
              to: [`${response.email}`],
              subject: `Thanks for reaching out to Couture by Ikigai! We will reach out shortly`,
              replyTo: 'couturebyikigai@gmail.com',
              html: '<strong>We will reach out shortly</strong>',
            },
          ]);
        

        console.log("[Form Actions] Saved Form Data", response)
      return {
          success: true,
          message: "Form submitted successfully!",
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
  
  