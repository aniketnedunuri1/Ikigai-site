
import { HeroTile } from "./components/hero";

export default function Home() {
  return (
    <div className="sm:grid grid-cols-3">
      <div className="bg-cover bg-center bg-[url('/inverted-background.png')]">
        <HeroTile/>
      </div>

      <div className="hidden sm:block sm:col-span-2 bg-black h-full w-full bg-[url('/background.png')] bg-cover bg-center"></div>
    </div>
  );
}
