

// // // "use client";
// // // import {
// // //     Accordion,
// // //     AccordionContent,
// // //     AccordionItem,
// // //     AccordionTrigger,
// // // } from "@/components/ui/accordion"

// // // import Image from 'next/image';

// // // export default function Page() {
// // //     return (
// // //         <div>
// // //         <div className="relative w-full h-72 sm:h-96">
// // //             <Image src={"/couture.svg"} alt="couture" width={700} height={700} />


// // //         </div>

// // //         <div className="relative grid grid-cols-2 grid-rows-2 gap-10 p-20 z-20">
// // //                 <div className="transform rotate-6">
// // //                     <Image src="/catalog/crew_front.png" alt="Crew Front 1" width={300} height={400} />
// // //                 </div>
// // //                 <div className="transform -rotate-6">
// // //                     <Image src="/catalog/crew_front.png" alt="Crew Front 2" width={300} height={400} />
// // //                 </div>
// // //                 <div className="transform rotate-12">
// // //                     <Image src="/catalog/crew_front.png" alt="Crew Front 3" width={300} height={400} />
// // //                 </div>
// // //                 <div className="transform -rotate-12">
// // //                     <Image src="/catalog/crew_front.png" alt="Crew Front 4" width={300} height={400} />
// // //                 </div>
// // //             </div>
// // //         <div>
// // //         <Image src={"/ikigai-logo.svg"} alt="couture" width={700} height={700} />

// // //         </div>
// // //         </div>
// // //     );
// // // } 

// // "use client";
// // import Image from 'next/image';

// // export default function Page() {
// //     return (
// //         <div className="relative bg-black text-pink-300 overflow-hidden">
// //             {/* Large heading */}
// //             <h1 className="absolute text-[8rem] font-bold left-0 top-0 z-10 leading-none">Gallery</h1>

// //             {/* Overlapping images */}
// //             <div className="relative grid grid-cols-2 grid-rows-2 gap-10 p-20 z-20">
// //                 <div className="transform rotate-6">
// //                     <Image src="/catalog/crew_front.png" alt="Crew Front 1" width={300} height={400} />
// //                 </div>
// //                 <div className="transform -rotate-6">
// //                     <Image src="/catalog/crew_front.png" alt="Crew Front 2" width={300} height={400} />
// //                 </div>
// //                 <div className="transform rotate-12">
// //                     <Image src="/catalog/crew_front.png" alt="Crew Front 3" width={300} height={400} />
// //                 </div>
// //                 <div className="transform -rotate-12">
// //                     <Image src="/catalog/crew_front.png" alt="Crew Front 4" width={300} height={400} />
// //                 </div>
// //             </div>

// //             {/* Signature or small text */}
// //             <p className="absolute bottom-10 right-10 text-sm italic z-30">
// //                 With love from Couture
// //             </p>
// //         </div>
// //     );
// // }


// "use client";
// import Image from 'next/image';

// export default function Page() {
//     return (
//         <div className="relative bg-black text-pink-300 overflow-hidden min-h-screen">
//             {/* Large title */}
//             <Image src="couture.svg" alt="Crew Front 1" width={700} height={700} objectFit="cover" />
//             <h1 className="absolute text-[10rem] font-bold left-10 top-0 z-10 leading-none opacity-20">
  
//             </h1>

            

//             {/* Overlapping images */}
//             <div className="relative z-20 p-20">
            
//                 {/* Image 1 */}
//                 <div className="absolute top-20 left-16 transform rotate-6 w-[300px] h-[400px]">
//                     <Image src="/catalog/crew_front.png" alt="Crew Front 1" layout="fill" objectFit="cover" />
//                 </div>

//                 {/* Image 2 */}
//                 <div className="absolute top-24 right-64 transform -rotate-6 w-[300px] h-[400px]">
//                     <Image src="/catalog/crew_front.png" alt="Crew Front 2" layout="fill" objectFit="cover" />
//                 </div>

//                 {/* Image 3 */}
//                 <div className="absolute top-72 left-64 transform rotate-12 w-[300px] h-[400px]">
//                     <Image src="/catalog/crew_front.png" alt="Crew Front 3" layout="fill" objectFit="cover" />
//                 </div>

//                 {/* Image 4 */}
//                 <div className="absolute top-80 right-24 transform -rotate-12 w-[300px] h-[400px]">
//                     <Image src="/catalog/crew_front.png" alt="Crew Front 4" layout="fill" objectFit="cover" />
//                 </div>
//             </div>

//             {/* Signature or small text */}
  
//         </div>
//     );
// }

"use client";
import Image from 'next/image';

export default function Page() {
    return (
        <div className="relative text-white bg-[#1e3832] overflow-hidden min-h-screen flex flex-col justify-center items-center">
            {/* Large title in the background */}
            <Image src="couture.svg" alt="Crew Front 2" width={300} height={400} className="rounded-md" />
            <h1 className="absolute text-[15rem] font-bold left-10 top-0 z-10 leading-none opacity-10">
                IKIGAI
            </h1>

         

            {/* Green background and white text styling */}
            <div className="relative w-full h-72 sm:h-96 flex justify-start items-center p-10">
                <h2 className="text-5xl font-semibold text-white z-20">
                    Gallery
                </h2>
            </div>

            {/* Images with a tilted layout and staggered position */}
            <div className="flex justify-center items-center relative mt-10 z-30">
                <div className="bg-[#fff] p-16 rounded-lg flex flex-col justify-center items-center max-w-7xl w-full"> 
                    {/* Images laid out with rotation and tilt */}
                    <div className="flex justify-center space-x-12">
                        <div className="transform rotate-6 mt-0 shadow-lg">
                            <Image src="/catalog/crew_front.png" alt="Crew Front 1" width={300} height={400} className="rounded-md" />
                        </div>
                        <div className="transform -rotate-6 mt-10 shadow-lg">
                            <Image src="/catalog/crew_front.png" alt="Crew Front 2" width={300} height={400} className="rounded-md" />
                        </div>
                        <div className="transform rotate-6 mt-20 shadow-lg">
                            <Image src="/catalog/crew_front.png" alt="Crew Front 3" width={300} height={400} className="rounded-md" />
                        </div>
                        <div className="transform -rotate-6 mt-30 shadow-lg">
                            <Image src="/catalog/crew_front.png" alt="Crew Front 4" width={300} height={400} className="rounded-md" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Signature and small details */}
            <p className="absolute bottom-10 right-10 text-sm italic z-40">
                With love from Couture
            </p>

            {/* Back button */}
            <p className="absolute top-5 right-10 text-sm cursor-pointer z-40">
                Back
            </p>
        </div>
    );
}