"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "../lib/actions";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "../lib/use-media-query";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().optional(),
  details: z.string().optional()
});

export function RequestOrder() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      details: "",
    },
  });

  // const form = z.object({
  //   name: z.string().min(2, {
  //     message: "Username must be at least 2 characters.",
  //   }),
  //   emaial: z.string().min(2, {
  //     message: "email must be at least 2 characters.",
  //   }),
  //   phone: z.number().min(10, {
  //     message: "phone must be at least 2 characters.",
  //   }),
  //   details: z.string().min(1, {
  //     message: "Username must be at least  characters.",
  //   }),
  // })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log("here")
    try {
      console.log(values);
      await submitForm(values);
      toast({
        title: "Order Requested Successfully",
        description: "We've received your order request and will process it shortly.",
      });
      setOpen(false);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log("Form submission started"); // Added log for debugging
  //   setLoading(true);
  //   try {
  //     console.log("Form values:", values); // Debugging the form values
  //     await submitForm(values);
  //     toast({
  //       title: "Order Requested Successfully",
  //       description: "We've received your order request and will process it shortly.",
  //     });
  //     setOpen(false);
  //     form.reset();
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast({
  //       title: "Error",
  //       description: "There was a problem submitting your order. Please try again.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setLoading(false);
  //     console.log("Form submission ended"); // Added log for debugging
  //   }
  // }

  function FormContent() {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="jane@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="123-456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter any inquiries/needs here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loading ? (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin outline outline-1 outline-black" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="bg-black text-white z-50">
              Submit
            </Button>
          )}
        </form>
      </Form>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger asChild>
        <Button onClick={() => { console.log("clicked") }} variant="default">Request Order / Get in Touch</Button>
      </DialogTrigger>

      <DialogContent>

        <DialogHeader>
          <DialogTitle>Request Order / Get in Touch </DialogTitle>
          <DialogDescription>
            Fill out the form to request an order. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>

        <FormContent />

      </DialogContent>
    </Dialog>
  );

}
