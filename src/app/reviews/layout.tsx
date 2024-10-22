import { HeroTile } from "@/components/hero";
import { RequestOrder } from "@/components/request-order";

export default function ReviewLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="sm:grid sm:grid-cols-3">
        
        {/* Strip of background with RequestOrder button at the bottom */}
        <div className="h-48 bg-cover bg-center bg-[url('/inverted-background.png')] sm:hidden flex items-end justify-center pb-4">
          <RequestOrder variant="secondary" />
        </div>
        
        {/* RequestOrder button visible on mobile, HeroTile on larger screens */}
        <div className="hidden sm:block sm:fixed sm:w-1/3 sm:bg-[url('/inverted-background.png')]">
          <HeroTile />
        </div>
        
        <div className="sm:col-start-2 sm:col-span-2 p-8">{children}</div>
        
      </div>
    );
  }