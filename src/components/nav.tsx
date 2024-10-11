"use client"

import Link from 'next/link'
import { newsreaderNormal } from '../lib/fonts'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image'

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
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isCatalogOrFAQPage = (pathname === '/catalog' || pathname === '/faq');

  return (
    <div className="lg:sticky">
      <nav className="flex flex-row items-start justify-between absolute top-0 left-0 w-full p-8 z-20" id="nav" >
        {/* Logo */}
        <Link href="/">
          <div className="flex flex-col cursor-pointer">
            {/* <div className={`${newsreaderNormal.className} text-white text-5xl`}>
              Couture
            </div>
            <div className="text-white font-thin">
              by Ikigai
            </div> */}
          <Image src="/couture-ikigai.svg" alt="Couture" width = {200} height = {200} />
         
          </div>
        </Link>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>


        {/* Navigation Items */}

        <div className={`hidden sm:flex flex-col items-end text-sm sm:flex-row font-thin text-md ${isCatalogOrFAQPage ? 'text-black' : 'text-white'}`}>
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

        {/* Mobile Menu - shown when menuOpen is true */}
        {menuOpen && (
          <div className="sm:hidden absolute top-20 right-0 w-40 text-right p-4 space-y-2 rounded-lg shadow-lg">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="block transition-all hover:text-neutral-800 dark:hover:text-neutral-200 text-black py-1 px-2"
                onClick={() => setMenuOpen(false)}  // Close menu when link is clicked
              >
                {name}
              </Link>
            ))}
          </div>
        )}

        {/* <div className={`flex flex-col items-end text-sm sm:flex-row font-thin text-md ${isCatalogOrFAQPage ? 'text-black' : 'text-white'}`}>

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
        </div> */}
      </nav>
    </div>
  )
}