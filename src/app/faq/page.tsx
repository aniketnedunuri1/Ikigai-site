

"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function Page() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            {/* Italic text at the top center */}
            <h1> FAQ </h1>


            {/* Items */}
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>I don’t have a design. Do you offer custom designs?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we provide full end-to-end design consultation for an additional fee.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I see a sample before placing a bulk order?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we offer sample products with every confirmed order. However, note that turnaround time for your order will be longer when a sample is requested before bulk production.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What is the turnaround time for an order?</AccordionTrigger>
                    <AccordionContent>
                        Once your order is confirmed, our typical turnaround time is 3 weeks. However, this may vary based on the complexity of the design and the size of the order.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Is there a minimum order quantity?</AccordionTrigger>
                    <AccordionContent>
                        Yes, our minimum order quantity is around 25-30 units per style. For smaller orders, please contact us to discuss your needs.                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        Do you offer discounts for bulk orders?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we offer tiered discounts for bulk orders. The larger your order, the bigger the discount. Contact us for a custom quote!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        How do I know what size to order?</AccordionTrigger>
                    <AccordionContent>
                        Each item has a detailed sizing chart to help you choose the right fit. If you're unsure, our team can assist you in determining the best size based on your needs.                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        Do you ship internationally?</AccordionTrigger>
                    <AccordionContent>
                        Yes, contact us for more details if you're placing an order outside of the U.S.                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>

                        What is your return or exchange policy?</AccordionTrigger>
                    <AccordionContent>
                        Custom orders are generally non-returnable unless there is a manufacturing defect.           </AccordionContent>
                </AccordionItem>
            </Accordion>

        </section>
    );
} 