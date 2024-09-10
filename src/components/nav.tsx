"use client"

import Link from 'next/link'
import { newsreaderNormal } from '../lib/fonts'
import { usePathname } from 'next/navigation';

const navItems = {
  // '/about': {
  //   name: 'ABOUT',
  // },
  '/': {
    name: 'HOME',
  },
  '/catalog': {
    name: 'CATALOG',
  },
  '/faq': {
    name: 'FAQ',
  },
  'https://calendly.com/aniketnedunuri/30min': {
    name: 'BOOK A CALL',
  },
}

export function Navbar() {
  const pathname = usePathname();

  const isCatalogOrFAQPage = (pathname === '/catalog' || pathname === '/faq');

  return (
    <div className="lg:sticky">
      <nav className="flex flex-row items-start justify-between absolute top-0 left-0 w-full p-8 z-20" id="nav" >
        {/* Logo */}
        <Link href="/">
          <div className="flex flex-col cursor-pointer">
            <div className={`${newsreaderNormal.className} text-white text-5xl`}>
              Couture
            </div>
            <div className="text-white font-thin">
              by Ikigai
            </div>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className={`flex flex-col items-end text-sm sm:flex-row font-thin text-md ${isCatalogOrFAQPage ? 'text-black' : 'text-white'}`}>

          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${isCatalogOrFAQPage ? 'text-black' : 'text-white'}`}
              >
                {name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}