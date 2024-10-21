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

        // const {data, error } = await resend.batch.send([
        //     {
        //       from: 'Acme <admin@couturebyikigai.com>',
        //       to: ['couturebyikigai@gmail.com'],
        //       subject: `${response.name} just signed up. Their email is: ${response.email}, and phone is ${response.phone}`,
        //       replyTo: 'couturebyikigai@gmail.com',
        //       html: '<h1>it works!</h1>',
        //     },
        //     {
        //       from: 'Acme <admin@couturebyikigai.com>',
        //       to: [`${response.email}`],
        //       subject: `Thanks for reaching out to Couture by Ikigai! We will reach out shortly`,
        //       replyTo: 'couturebyikigai@gmail.com',
        //       html: '<strong>We will reach out shortly</strong>',
        //     },
        //   ]);
        
        const { data, error } = await resend.batch.send([
            {
              from: 'Acme <admin@couturebyikigai.com>',
              to: ['couturebyikigai@gmail.com'],
              subject: `${response.name} just signed up. Their email is: ${response.email}, and phone is ${response.phone}`,
              replyTo: 'couturebyikigai@gmail.com',
              html: '<h1>It works!</h1>',
            },
            {
              from: 'Acme <admin@couturebyikigai.com>',
              to: [`${response.email}`],
              subject: `Thanks for reaching out to Couture by Ikigai! Here are your next steps`,
              replyTo: 'couturebyikigai@gmail.com',
              html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thanks for your inquiry! </title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            padding: 20px;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            font-size: 24px;
                            color: #333333;
                        }
                        p {
                            font-size: 16px;
                            color: #666666;
                        }
                        ul {
                            margin-top: 10px;
                            padding-left: 20px;
                        }
                        li {
                            margin-bottom: 10px;
                            font-size: 16px;
                        }
                        a {
                            color: #007bff;
                            text-decoration: none;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Thank You for Reaching Out to Couture by Ikigai!</h1>
                        <p>We appreciate your interest in working with us. Next steps: </p>
                        <p><strong>Next Steps:</strong></p>
                        <ul>
                            <li>Be on the lookout for a email (couturebyikigai@gmail.com) or text from Aniket (732-997-8157) or Anshul (908-798-1235).</li>
                            <li>Send any logos or designs to <a href="mailto:couturebyikigai@gmail.com">couturebyikigai@gmail.com</a>.</li>
                            <li>If you have any questions, don't hesitate to <a href="mailto:couturebyikigai@gmail.com">reach out to us</a>.</li>
                        </ul>
                        <p>Best regards,<br/>The Couture by Ikigai Team</p>
                    </div>
                </body>
                </html>
              `,
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
  
  