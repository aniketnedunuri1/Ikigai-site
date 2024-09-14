"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "../lib/actions";
import { toast } from "./ui/use-toast";

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().optional(),
  details: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

interface FormContentProps {
  form: UseFormReturn<FormSchema>;
  onSubmit: SubmitHandler<FormSchema>;
  loading: boolean;
}

const FormContent: React.FC<FormContentProps> = React.memo(
  ({ form, onSubmit, loading }) => (
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
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="bg-black text-white z-50">
            Submit
          </Button>
        )}
      </form>
    </Form>
  )
);

export function RequestOrder() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      details: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchema> = React.useCallback(
    async (values) => {
      setLoading(true);
      try {
        await submitForm(values);
        toast({
          title: "Order Requested Successfully",
          description:
            "We've received your order request and will process it shortly.",
        });
        setOpen(false);
        form.reset();
      } catch (error) {
        console.error("Error submitting form:", error);
        toast({
          title: "Error",
          description:
            "There was a problem submitting your order. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Request Order / Get in Touch</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Order / Get in Touch</DialogTitle>
          <DialogDescription>
            Fill out the form to request an order. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <FormContent form={form} onSubmit={onSubmit} loading={loading} />
      </DialogContent>
    </Dialog>
  );
}
