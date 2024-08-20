import { Button } from "../components/ui/button";
import { newsreaderItalic, newsreaderNormal } from "../lib/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col sm:grid sm:grid-cols-3 items-center justify-between m-2 bg-transparent">
      <div className="flex flex-col justify-center p-8 gap-12 h-full w-full sm:w-auto bg-[url('/inverted-background.png')] bg-cover bg-center sm:col-span-1">
        <div className={`${newsreaderNormal.className} text-white text-[36px] max-w-md`}>
          club & company merch from the{" "}
          <span className={newsreaderItalic.className}>same</span> suppliers as
        </div>

        <Image 
          src="/logos.png" 
          alt="AF" 
          width={300} 
          height={100} 
          className="select-none"
          draggable="false"
        />
        <div className="flex flex-row gap-3 items-center">
          <Button className="max-w-xl">Get Started</Button>
          <div className={`${newsreaderNormal.className} text-white text-lg`}>
            starting at{" "}
            <span className={newsreaderItalic.className}>$20/piece</span>
          </div>
        </div>
      </div>
      <div className="hidden sm:block sm:col-span-2 bg-black h-full bg-[url('/background.png')] bg-cover bg-center">
        {/* Your content */}
      </div>
    </main>
  );
}