import { HeroTile } from "../../components/hero";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sm:grid sm:grid-cols-3">
      
      {/* Strip of background */}
      <div className="h-48 bg-cover bg-center bg-[url('/inverted-background.png')] sm:hidden"></div>
      <div className="hidden sm:block sm:fixed sm:w-1/3 sm:bg-[url('/inverted-background.png')]">
        <HeroTile />
      </div>
      <div className="sm:col-start-2 sm:col-span-2 p-8">{children}</div>
    </div>
  );
}
