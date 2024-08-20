import Link from 'next/link'
import { newsreaderNormal } from '../../lib/fonts'

const navItems = {
  '/about': {
    name: 'ABOUT',
  },
  '/blog': {
    name: 'BLOG',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'CONTACT',
  },
}

export function Navbar() {
  return (
    <div className="lg:sticky">
      <nav
        className="flex flex-row items-start justify-between absolute top-0 left-0 w-full p-8"
        id="nav"
      >
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
        <div className="flex flex-row text-white font-thin">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
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