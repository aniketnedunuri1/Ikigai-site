"use client";

import ReviewCard from "./review-card";

export default function Page() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            {/* Italic text at the top center */}
            <h1 className="text-center mb-8 text-2xl italic">Reviews</h1>

            {/* Grid layout for reviews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">


                <ReviewCard
                    description="You both rock thanks again for the hard work. We really enjoy working with you guys and cannot wait to see the product"
                    name="Andrew"
                    role="TEK"

                />

                <ReviewCard
                    description="the tees are solid, l've only worn once or twice but no complaints at all. the quality is miles better than what we had before"
                    name="Shrey"
                    role="V1"

                />

                <ReviewCard
                    description="Some of my better shirts. Look great under the blazer too
Print is nice and soft. Not plastic feeling which is exactly what I wanted."
                    name="Vincent"
                    role="Village Spaces"

                />


                <ReviewCard
                    description="Received, thank you. Our CEO says the quality is great, we love them. Btw we'll be ordering more soon."
                    name="Nina"
                    role="Hackerpulse"

                />



                <ReviewCard
                    description="omg that was so fast! sent it off to the other girls on the leadership team, but i think they look fantastic!"
                    name="Katherine"
                    role="Society of Women Engineers"

                />

                <ReviewCard
                    description="Everyone was impressed! The quality, thickness, and warmth are noticeably better compared to brands like Custom Ink."
                    name="Sarim"
                    role="Entrepreneurship Club"

                />


                <ReviewCard
                    description="i'm not even exaggerating, i didn't even realize it was a club's hoodie. i straight up thought it was essentials"
                    name="Dhwani"
                    role="DDN"

                />




                {/* Add more reviews here if needed */}
            </div>
        </section>
    );
}