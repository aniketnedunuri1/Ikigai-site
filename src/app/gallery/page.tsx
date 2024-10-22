// "use client";
// import { RequestOrder } from '@/components/request-order';
// import Image from 'next/image';

// export default function Page() {
//     return (
//         <div className="relative overflow-hidden min-h-screen flex flex-col">
//             {/* Large title in the background */}
//             <div className="mt-4 ml-2">
//                 {/* Responsive Couture SVG */}
//                 {/* <Image 
//                     src="couture.svg" 
//                     alt="Couture Logo" 
//                     width={150} height={200} 
//                     // className="rounded-md md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[400px]" 
//                 /> */}
//             </div>

//             {/* Text Content */}
//             <div className="text-center max-w-3xl mx-auto mb-12">
//                 <h1 className="text-5xl text-black font-bold mt-10 mb-4">GALLERY</h1>
//                 {/* <p className="mb-4">
//                     NOT&nbsp;&nbsp;&nbsp;NORMAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MERCH
//                 </p> */}

//                 <RequestOrder variant="secondary"/>
//             </div>

            


            

//             {/* Square Grid Layout */}
//             <div className="flex justify-center items-center relative z-30">
//                 <div className="bg-[#fff] p-16 rounded-lg max-w-7xl w-full"> 
//                     {/* Responsive grid: 2x2 on small screens, 3x3 on larger screens */}
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                         <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
//                             <Image src="/gallery/atlas1.png" alt="Image 1" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
//                         </div>
//                         <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
//                             <Image src="/gallery/atlas2.png" alt="Image 2" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
//                         </div>
//                         <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
//                             <Image src="/gallery/atlas3.png" alt="Image 3" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
//                         </div>
//                         <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
//                             <Image src="/gallery/v1ex1.png" alt="Image 4" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
//                         </div>
//                         {/* <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
//                             <Image src="/gallery/atlas4.png" alt="Image 4" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
//                         </div>
//                         <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
//                             <Image src="/gallery/v1ex2.png" alt="Image 4" width={200} height={200} className="rounded-none object-cover" />
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";
import { RequestOrder } from '@/components/request-order';
import Image from 'next/image';

export default function Page() {
    return (
        <div className=" overflow-hidden min-h-screen flex flex-col">
            {/* Large title in the background */}
            <div className="mt-4 ml-2">
                {/* Responsive Couture SVG */}
                {/* <Image 
                    src="couture.svg" 
                    alt="Couture Logo" 
                    width={150} height={200} 
                    // className="rounded-md md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[400px]" 
                /> */}
            </div>

            {/* Text Content */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-5xl text-black font-bold mt-10 mb-4">GALLERY</h1>
                <RequestOrder variant="secondary"/>
            </div>

            {/* Square Grid Layout */}
            <div className="flex justify-center items-center relative z-30">
                <div className="bg-[#fff] p-16 rounded-lg max-w-7xl w-full"> 
                    {/* Responsive grid: 2x2 on small and medium screens, 3x3 on larger screens */}
                    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
                            <Image src="/gallery/atlas1.png" alt="Image 1" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
                            <Image src="/gallery/atlas2.png" alt="Image 2" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
                            <Image src="/gallery/atlas3.png" alt="Image 3" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
                        </div>
                        <div className="col-span-1 row-span-1 shadow-lg hover:scale-105 transition-transform duration-300">
                            <Image src="/gallery/v1ex1.png" alt="Image 4" layout="responsive" width={200} height={200} className="rounded-none object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}