import { HeroTile } from "../components/hero";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sm:grid sm:grid-cols-3">
      <div className="hidden sm:block sm:fixed sm:w-1/3 sm:bg-[url('/inverted-background.png')]">
        <HeroTile />
      </div>
      <div className="sm:col-start-2 sm:col-span-2">
        {children}
      </div>
    </div>
  );
}