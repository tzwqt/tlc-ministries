import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/experience', label: 'Experience' },
  { href: '/courses', label: 'Courses' },
  { href: '/services', label: 'Services' },
  { href: '/beliefs', label: 'Beliefs' },
  { href: '/events', label: 'Events' },
  { href: '/give', label: 'Give' },
  { href: '/contact', label: 'Contact' },
]

const socialIcons = [
  {
    label: 'Instagram',
    href: '#',
    path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-mid border-t border-white/5 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="font-display italic font-bold text-xl text-white hover:text-brand-gold transition-colors">
              Be Real Global Ministry
            </Link>
            <p className="text-white/40 text-sm leading-7 mt-4">
              Where truth is lived, love leads correction,<br />
              and lives are anchored in Christ.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-white/30 hover:text-brand-gold transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d={s.path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/45 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-5">
              Contact
            </p>
            <p className="text-white/45 text-sm mb-2">Email us anytime</p>
            <a
              href="mailto:tlc.ministries.38@gmail.com"
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              tlc.ministries.38@gmail.com
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-brand-red hover:bg-brand-red-hover text-white text-xs px-5 py-2.5 rounded-full uppercase tracking-widest font-semibold transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Be Real Global Ministry · All Rights Reserved
          </p>
          <p className="text-white/20 text-xs italic">
            Be Real · Be Transformed · Be Set Apart
          </p>
        </div>
      </div>
    </footer>
  )
}
