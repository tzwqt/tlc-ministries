import Link from "next/link"

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="h-px w-12 bg-brand-gold/60" />
    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
    <div className="h-px w-12 bg-brand-gold/60" />
  </div>
)

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-3">
    {children}
  </p>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const tiers = [
  {
    name: "Journey",
    price: "250",
    tagline: "Beginner level: Get the basics",
    duration: "Valid for 3 months",
    best: false,
    benefits: [
      "1 monthly 1-hr counseling session",
      "Access to beginner course materials",
      "Weekly devotional check-ins",
      "Email support between sessions",
      "Welcome resource guide",
    ],
  },
  {
    name: "Expedition",
    price: "450",
    tagline: "Intermediate level: Master the skills",
    duration: "Valid for 6 months",
    best: true,
    benefits: [
      "2 monthly 1-hr counseling sessions",
      "Full online course library access",
      "Bi-weekly discipleship check-ins",
      "Priority email & message support",
      "1 prayer ministry session per month",
      "Personalized growth plan",
    ],
  },
  {
    name: "Odyssey",
    price: "800",
    tagline: "Expert level: Complete the transformation",
    duration: "Valid for 12 months",
    best: false,
    benefits: [
      "Monthly 1-hr counseling sessions (ongoing)",
      "Unlimited course access — all levels",
      "Weekly discipleship & accountability",
      "Direct access for prayer & support",
      "Quarterly intensive sessions",
      "Prophetic ministry sessions",
      "Inner healing & deliverance support",
    ],
  },
]

export default function Packages() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.15),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>Invest in Your Growth</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Choose Where <span className="text-brand-gold">to Start</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Register for one of my programs today, so we can align you with your destiny.
          </p>
        </div>
      </section>

      {/* ───────── PRICING CARDS ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl flex flex-col ${
                t.best
                  ? "bg-white text-brand-dark ring-2 ring-brand-gold scale-[1.03]"
                  : "bg-brand-card border border-white/6"
              }`}
            >
              {/* BEST VALUE BADGE */}
              {t.best && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-gold text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                    Best Value
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* TIER NAME */}
                <p className={`text-xs tracking-[0.35em] uppercase mb-3 ${t.best ? "text-brand-red" : "text-brand-gold"}`}>
                  {t.name}
                </p>

                {/* PRICE */}
                <div className="flex items-start gap-1 mb-1">
                  <span className={`text-sm font-bold mt-2 ${t.best ? "text-brand-dark/60" : "text-white/50"}`}>$</span>
                  <span className={`text-6xl font-black leading-none ${t.best ? "text-brand-dark" : "text-white"}`}>
                    {t.price}
                  </span>
                </div>

                <p className={`text-sm mt-2 mb-1 ${t.best ? "text-brand-dark/70" : "text-white/55"}`}>{t.tagline}</p>
                <p className={`text-xs mb-7 ${t.best ? "text-brand-dark/40" : "text-white/30"}`}>{t.duration}</p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`block text-center w-full py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-colors ${
                    t.best
                      ? "bg-brand-red hover:bg-brand-red-hover text-white"
                      : "bg-brand-red hover:bg-brand-red-hover text-white"
                  }`}
                >
                  Select
                </Link>
              </div>

              {/* DIVIDER */}
              <div className={`mx-8 h-px ${t.best ? "bg-brand-dark/10" : "bg-white/6"}`} />

              {/* BENEFITS */}
              <div className="p-8 flex-1">
                <ul className="space-y-3">
                  {t.benefits.map((b) => (
                    <li key={b} className={`flex items-start gap-3 text-sm ${t.best ? "text-brand-dark/70" : "text-white/55"}`}>
                      <span className={t.best ? "text-brand-red" : "text-brand-gold"}>
                        <CheckIcon />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/25 text-xs mt-12">
          Not sure which package is right for you?{" "}
          <Link href="/contact" className="text-brand-gold hover:text-white transition-colors">
            Reach out and we&apos;ll help you decide.
          </Link>
        </p>
      </section>

      {/* ───────── BOTTOM CTA ───────── */}
      <section className="bg-brand-mid py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <SectionLabel>Your Next Step</SectionLabel>
          <h2 className="text-4xl font-black italic mb-4">
            Your destiny is worth the investment.
          </h2>
          <p className="text-white/60 leading-8 mb-10">
            Every package is designed to meet you where you are and take you where God
            is calling you. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-red-hover text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/experience"
              className="border border-white/30 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors"
            >
              View Single Sessions
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
