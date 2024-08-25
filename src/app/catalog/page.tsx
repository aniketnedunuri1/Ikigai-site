"use client";
import Item from "./item";

export default function Page() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="flex space-x-8">  {/* space-x-8 adds spacing between the items */}
        <Item src1="/catalog/hoodie_front.png" src2="/catalog/hoodie_back.png" title="PERFECT HOODIE" />
        <Item src1="/catalog/crew_front.png" src2="/catalog/crew_back.png" title="PERFECT CREW"/>
      </div>
    </section>
  );
}