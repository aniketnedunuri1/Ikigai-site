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
import { submitForm } from "../../lib/actions";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "../../lib/use-media-query";
import { toast } from "../../components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().optional(),
  selectedTypes: z.array(z.string()).min(1, {
    message: "At least one clothing type must be selected.",
  }),
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
      selectedTypes: [],
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
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

  const handleTypeToggle = (type: string) => {
    const { selectedTypes } = form.getValues();
    if (selectedTypes.includes(type)) {
      form.setValue(
        "selectedTypes",
        selectedTypes.filter((t) => t !== type)
      );
    } else {
      form.setValue("selectedTypes", [...selectedTypes, type]);
    }
  };

  const FormContent = ({ className }: React.ComponentProps<"div">) => (
    <div className={cn("space-y-8", className)}>
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
          <div className="flex flex-wrap">
            <FormField
              control={form.control}
              name="selectedTypes"
              render={() => (
                <FormItem>
                  <FormLabel>Clothing</FormLabel>
                  <FormControl>
                    <div className="flex space-x-2">
                      {["hoodies", "crewneck", "tshirts", "sweatpants"].map((type) => (
                        <Button
                          key={type}
                          type="button"
                          variant="outline"
                          onClick={() => handleTypeToggle(type)}
                          className={
                            form.getValues().selectedTypes.includes(type)
                              ? "bg-black text-white"
                              : "bg-gray-200"
                          }
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter details about clothes here (type of clothing, quantity, etc)."
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
            <Button type="submit" className="bg-black text-white">
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Request Order</Button>
        </DialogTrigger>
        
        <DialogContent className="flex flex-col overflow-auto">
          <DialogHeader>
            <DialogTitle>Request Order</DialogTitle>
            <DialogDescription>
              Fill out the form to request an order. Click submit when you're done.
            </DialogDescription>
          </DialogHeader>
          <FormContent />
        </DialogContent>
      </Dialog>
    );
 
}