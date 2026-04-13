'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/experience', label: 'Experience' },
  { href: '/courses', label: 'Online Courses' },
  { href: '/packages', label: 'Packages' },
  { href: '/blog', label: 'Blog' },
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="font-display italic text-white font-semibold text-lg shrink-0"
        >
          Be Real Global Ministry
        </Link>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-6">
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
            className="bg-brand-red hover:bg-brand-red-hover text-white text-sm px-5 py-2.5 rounded-full font-medium transition-colors"
          >
            Join Us
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        open ? 'max-h-[32rem]' : 'max-h-0'
      }`}>
        <div className="bg-black/95 backdrop-blur-md px-6 pb-6 flex flex-col border-t border-white/10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 py-3 border-b border-white/10 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-brand-red text-white text-center py-3 rounded-full mt-4 font-medium"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
