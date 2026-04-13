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

const weekly = [
  {
    day: "Sunday",
    time: "10:00 AM",
    title: "Sunday Worship Service",
    desc: "Gather with the family for Spirit-led worship, the Word, and fellowship. Come expecting a move of God.",
    tag: "Every Sunday",
  },
  {
    day: "Wednesday",
    time: "7:00 PM",
    title: "Prayer & Fire Night",
    desc: "An evening of intercession, deliverance prayer, and seeking the face of God together. All are welcome.",
    tag: "Every Wednesday",
  },
  {
    day: "Friday",
    time: "6:00 PM",
    title: "Be Real Youth Night",
    desc: "A safe, bold space for teens and young adults to encounter God authentically — no masks required.",
    tag: "Every Friday",
  },
]

const upcoming = [
  {
    date: "May 17, 2026",
    title: "Be Real Women's Retreat",
    desc: "A powerful one-day retreat for women to encounter God, find community, and go deeper in identity and healing.",
    badge: "Upcoming",
  },
  {
    date: "June 7–8, 2026",
    title: "Be Real Conference 2026",
    desc: "Our annual gathering — two days of worship, teaching, ministry, and transformation. Don't miss it.",
    badge: "Conference",
  },
  {
    date: "July 4, 2026",
    title: "Community Outreach Day",
    desc: "Join us as we take the love of Christ into the streets — food, prayer, and practical ministry.",
    badge: "Outreach",
  },
]

export default function Events() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.15),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>Join Us</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Events &amp; <span className="text-brand-gold">Gatherings</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Every gathering is an opportunity to encounter God and connect with community.
            Find your next one below.
          </p>
        </div>
      </section>

      {/* ───────── WEEKLY SERVICES ───────── */}
      <section className="py-20 px-6 bg-brand-mid">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Every Week</SectionLabel>
            <h2 className="text-4xl font-bold italic">Weekly Gatherings</h2>
            <Divider />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {weekly.map((e) => (
              <div key={e.title} className="bg-brand-card border border-white/6 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-brand-gold text-xs tracking-widest uppercase">{e.tag}</span>
                  <span className="text-white/30 text-xs">{e.time}</span>
                </div>
                <p className="text-2xl font-black italic mb-1">{e.day}</p>
                <h3 className="text-lg font-bold mb-3">{e.title}</h3>
                <p className="text-white/55 text-sm leading-7">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── UPCOMING EVENTS ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>On the Horizon</SectionLabel>
            <h2 className="text-4xl font-bold italic">Upcoming Events</h2>
            <Divider />
          </div>

          <div className="space-y-5">
            {upcoming.map((e) => (
              <div
                key={e.title}
                className="bg-brand-card border border-white/6 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                <div className="min-w-[120px]">
                  <p className="text-brand-gold text-xs tracking-widest uppercase mb-1">{e.badge}</p>
                  <p className="text-white/50 text-sm">{e.date}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold italic mb-2">{e.title}</h3>
                  <p className="text-white/55 text-sm leading-7">{e.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white/60 text-xs px-5 py-2.5 rounded-full uppercase tracking-widest transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center">
        <h2 className="text-4xl font-black italic mb-4">Never Miss a Gathering</h2>
        <p className="text-white/80 mb-10 max-w-lg mx-auto leading-7">
          Stay connected with us on social media or reach out directly so we can
          keep you in the loop on everything happening at Be Real.
        </p>
        <Link
          href="/contact"
          className="bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
        >
          Stay Connected
        </Link>
      </section>

    </div>
  )
}
