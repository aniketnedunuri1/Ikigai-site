"use client";

import ReviewCard from "./review-card";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4 mt-10">
            {/* Italic text at the top center */}
            <h1 className="text-center mb-8 text-2xl sm:text-3xl lg:text-4xl">Reviews</h1>

            {/* Grid layout for reviews: 1x1 at 768px, 2x2 at 1559px, 3x3 on larger screens */}
            <div className="grid grid-cols-1 md-review:grid-cols-2 lg-review:grid-cols-2 xl-review:grid-cols-3 gap-x-2 gap-y-6 w-full max-w-7xl justify-items-center">
                <ReviewCard
                    description="You both rock thanks again for the hard work. We really enjoy working with you guys and cannot wait to see the product."
                    name="Andrew"
                    role="TEK"
                />

                <ReviewCard
                    description="The tees are solid, l've only worn once or twice but no complaints at all. The quality is miles better than what we had before."
                    name="Shrey"
                    role="V1"
                />

                <ReviewCard
                    description="Some of my better shirts. Look great under the blazer too. Print is nice and soft. Not plastic feeling which is exactly what I wanted."
                    name="Vincent"
                    role="Village Spaces"
                />

                <ReviewCard
                    description="Received, thank you. Our CEO says the quality is great, we love them. Btw we'll be ordering more soon."
                    name="Nina"
                    role="Hackerpulse"
                />

                <ReviewCard
                    description="Omg that was so fast! Sent it off to the other girls on the leadership team, but I think they look fantastic!"
                    name="Katherine"
                    role="Society of Women Engineers"
                />

                <ReviewCard
                    description="Everyone was impressed! The quality, thickness, and warmth are noticeably better compared to brands like Custom Ink."
                    name="Sarim"
                    role="Entrepreneurship Club"
                />

                <ReviewCard
                    description="I'm not even exaggerating, I didn't even realize it was a club's hoodie. I straight up thought it was essentials."
                    name="Dhwani"
                    role="DDN"
                />
            </div>
        </div>
    );
}
