import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {ThemeProvider} from "../components/theme-provider"

import React from "react";

export default function RequestOrder() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Request Order</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <DialogHeader>
                        <DialogTitle className="text-2xl">
                            What are you interested in?
                        </DialogTitle>
                        <DialogDescription className="text-xsm">
                            *orders of 10+ pieces get custom merch design*
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Jane Doe"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                                Phone
                            </Label>
                            <Input
                                type="phone"
                                id="phone"
                                placeholder="Phone"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                                Details
                            </Label>
                            <Textarea
                                placeholder="Enter details about clothes here (type of clothing, quantity, etc)."
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <Button variant="outline" type="submit">Save changes</Button>
                    </div>
                    <div className="text-center mt-2">
                        <span> or </span>
                    </div>
                    <div className="text-center mt-2">
                        <a href="https://calendly.com/aniketnedunuri/30min" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">Book a call</Button>
                        </a>
                    </div>
                </ThemeProvider>
            </DialogContent>
        </Dialog>
    );
}
