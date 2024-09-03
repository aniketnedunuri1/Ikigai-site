// "use client";
// import Item from "./item";

// export default function Page() {
//   return (
//     <section className="flex flex-col justify-center items-center min-h-screen space-y-8 mt-20">
//       {/* Italic text at the top center */}
//       <div className="text-center">
//         <p className="italic text-lg">
//           *We offer any color choice and full customizability of designs*
//         </p>

//       </div>

//       {/* Items */}
//       <div className="grid grid-cols-2 grid-x-2">
//         <Item src1="/catalog/hoodie_front.png" src2="/catalog/hoodie_back.png" title="HOODIE" 
//         desc = "Heavyweight 100% Cotton Blend. Slightly oversized, baggier fit." />
//         <Item src1="/catalog/crew_front.png" src2="/catalog/crew_back.png" title="CREW"  
//         desc = "Heavyweight 100% Cotton Blend. Slightly oversized, baggier fit." />
//         <Item src1="/catalog/ikigai_pants_front.png" src2="/catalog/ikigai_pants_back.png" title="SWEATS"
//         desc = "Midweight French Terry Cotton Blend. Standard Fit."/>
//         <Item src1="/catalog/shirt_front.png" src2="/catalog/shirt_back.png" title="TEE" 
//         desc = "Heavyweight / Midweight 100% Cotton Blend. Regular & Oversized Fit available. "/>
//       </div>
//     </section>
//   );
// }

"use client";
import Item from "./item";

export default function Page() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen space-y-8 mt-10 sm:mt-20">
      {/* Italic text at the top center */}
      <div className="text-center px-4">
        <p className="italic text-base sm:text-lg">
          *We offer any color choice and full customizability of designs*
        </p>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Item src1="/catalog/hoodie_front.png" src2="/catalog/hoodie_back.png" title="HOODIE" 
        desc="Heavyweight 100% Cotton Blend. Slightly oversized, baggier fit." />
        <Item src1="/catalog/crew_front.png" src2="/catalog/crew_back.png" title="CREW"  
        desc="Heavyweight 100% Cotton Blend. Slightly oversized, baggier fit." />
        <Item src1="/catalog/ikigai_pants_front.png" src2="/catalog/ikigai_pants_back.png" title="SWEATS"
        desc="Midweight French Terry Cotton Blend. Standard Fit."/>
        <Item src1="/catalog/shirt_front.png" src2="/catalog/shirt_back.png" title="TEE" 
        desc="Heavyweight / Midweight 100% Cotton Blend. Regular & Oversized Fit available."/>
      </div>
    </section>
  );
} 