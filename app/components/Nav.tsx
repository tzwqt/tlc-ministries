'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/experience', label: 'Experience' },
  { href: '/courses', label: 'Courses' },
  { href: '/packages', label: 'Packages' },
  { href: '/services', label: 'Services' },
  { href: '/beliefs', label: 'Beliefs' },
  { href: '/events', label: 'Events' },
  { href: '/give', label: 'Give' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="font-display italic text-white font-semibold text-lg"
        >
          Be Real Global Ministry
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-500 text-white text-sm px-5 py-2.5 rounded-full font-medium"
          >
            Join Us
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span className={`w-6 h-0.5 bg-white ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        open ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="bg-black px-6 pb-6 flex flex-col border-t border-white/10">

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 py-3 border-b border-white/10"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-red-600 text-white text-center py-3 rounded-full mt-4"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  )
}