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

const services = [
  {
    num: "01",
    title: "Sunday Worship Service",
    desc: "A Spirit-filled gathering every Sunday at 10:00 AM. Expect anointed worship, the preached Word, and an atmosphere where God moves. All are welcome — come as you are.",
    detail: "Every Sunday · 10:00 AM",
  },
  {
    num: "02",
    title: "Prayer & Deliverance",
    desc: "We believe Jesus still heals and delivers today. Our prayer ministry team stands ready to pray for breakthrough, healing, and freedom from every form of bondage.",
    detail: "Available by request",
  },
  {
    num: "03",
    title: "Biblical Counseling",
    desc: "Life is hard. Our pastoral team offers one-on-one biblical counseling rooted in Scripture, practical wisdom, and the power of the Holy Spirit — not just advice, but real ministry.",
    detail: "By appointment",
  },
  {
    num: "04",
    title: "Discipleship Programs",
    desc: "Structured one-on-one and small group discipleship journeys designed to help believers grow in the Word, prayer, identity, and practical Christian living.",
    detail: "Ongoing enrollment",
  },
  {
    num: "05",
    title: "Prophetic Ministry",
    desc: "We honor and operate in the prophetic gifts. Our team provides Scripture-grounded, Spirit-led prophetic ministry that builds up, encourages, and strengthens the body.",
    detail: "During services & events",
  },
  {
    num: "06",
    title: "Community Outreach",
    desc: "Ministry doesn't stop inside the building. We take the Gospel and practical love into the community through food drives, prayer walks, and evangelism events.",
    detail: "Monthly events",
  },
]

export default function Services() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.15),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>How We Serve</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            What We <span className="text-brand-gold">Offer</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            From Sunday worship to one-on-one ministry, everything we do is designed
            to bring people into encounter, healing, and transformation.
          </p>
        </div>
      </section>

      {/* ───────── SERVICES LIST ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-5">
          {services.map((s) => (
            <div key={s.num} className="bg-brand-card border border-white/6 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="min-w-[60px]">
                <p className="text-brand-gold text-2xl font-black italic">{s.num}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold italic mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm leading-7 mb-3">{s.desc}</p>
                <span className="text-brand-gold/70 text-xs uppercase tracking-widest">{s.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── QUOTE SECTION ───────── */}
      <section className="bg-brand-mid py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-display italic text-2xl md:text-3xl text-white/80 leading-relaxed">
            &ldquo;The Spirit of the Lord is on me, because he has anointed me
            to proclaim good news to the poor… to set the oppressed free.&rdquo;
          </p>
          <p className="text-brand-gold text-sm mt-4 tracking-widest uppercase">Luke 4:18</p>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center">
        <h2 className="text-4xl font-black italic mb-4">
          Ready to Take a Next Step?
        </h2>
        <p className="text-white/80 mb-10 max-w-lg mx-auto leading-7">
          Whether you need prayer, counseling, or simply want to get connected —
          we are here. Reach out and let&apos;s walk this journey together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/events"
            className="border border-white/40 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors"
          >
            See Events
          </Link>
        </div>
      </section>

    </div>
  )
}
