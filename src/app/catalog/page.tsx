"use client";
import Item from "./item";

export default function Page() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen space-y-8">
      {/* Italic text at the top center */}
      <div className="text-center">
        <p className="italic text-lg">
          *We offer any color choice and full customizability of designs*
        </p>

      </div>

      {/* Items */}
      <div className="flex space-x-8">
        <Item src1="/catalog/hoodie_front.png" src2="/catalog/hoodie_back.png" title="HOODIE" />
        <Item src1="/catalog/crew_front.png" src2="/catalog/crew_back.png" title="CREW"/>
      </div>
    </section>
  );
}