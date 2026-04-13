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

const ministries = [
  { label: "Youth", title: "Be Real Youth", desc: "A bold, authentic space for teens and young adults to encounter God, build identity, and do life together — no masks, no pretending, just real faith.", cta: "Explore Youth Ministry" },
  { label: "Women", title: "Women of Worth", desc: "Women healing, growing, and rising together in the truth of who God says they are. A sisterhood built on Scripture, prayer, and genuine community.", cta: "Explore Women's Ministry" },
  { label: "Men", title: "Kingdom Men", desc: "Raising men who lead with integrity, faith, and purpose. A band of brothers committed to accountability, the Word, and becoming who God called them to be.", cta: "Explore Men's Ministry" },
  { label: "Outreach", title: "Outreach & Evangelism", desc: "Taking the love of Christ beyond the walls of the church — into the streets, communities, and lives of those who need to know they are not forgotten.", cta: "Get Involved" },
  { label: "Prayer", title: "Prayer & Deliverance", desc: "We believe in the power of Spirit-led intercession and deliverance. This ministry team prays, contends, and believes God for breakthrough in every life.", cta: "Join the Prayer Team" },
  { label: "Discipleship", title: "Discipleship & Mentorship", desc: "One-on-one and small group discipleship rooted in the Word. Growth isn't accidental — it's intentional. We walk with people at every stage of their journey.", cta: "Start a Journey" },
]

const services = [
  { num: "01", title: "Sunday Worship Service", detail: "Every Sunday · 10:00 AM", desc: "A Spirit-filled gathering of worship, the preached Word, and an atmosphere where God moves. All are welcome — come as you are." },
  { num: "02", title: "Prayer & Deliverance", detail: "Available by request", desc: "We believe Jesus still heals and delivers today. Our prayer ministry team stands ready to pray for breakthrough, healing, and freedom." },
  { num: "03", title: "Biblical Counseling", detail: "By appointment", desc: "One-on-one pastoral counseling rooted in Scripture, practical wisdom, and the power of the Holy Spirit — not just advice, but real ministry." },
  { num: "04", title: "Discipleship Programs", detail: "Ongoing enrollment", desc: "Structured one-on-one and small group journeys designed to help believers grow in the Word, prayer, identity, and practical Christian living." },
  { num: "05", title: "Prophetic Ministry", detail: "During services & events", desc: "Scripture-grounded, Spirit-led prophetic ministry that builds up, encourages, and strengthens the body." },
  { num: "06", title: "Community Outreach", detail: "Monthly events", desc: "We take the Gospel and practical love into the community through food drives, prayer walks, and evangelism events." },
]

export default function Ministries() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.28),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>Where Do You Belong?</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Ministries &amp; <span className="text-brand-gold">Services</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Each ministry is a family. Each service is an encounter.
            Find where God is calling you to grow, serve, and belong.
          </p>
        </div>
      </section>

      {/* ───────── MINISTRIES GRID ───────── */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Ministry Departments</SectionLabel>
            <h2 className="text-4xl font-bold italic">Our Ministries</h2>
            <Divider />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m, i) => (
              <div key={m.title} className="bg-brand-card border border-white/6 hover:border-brand-red/40 rounded-2xl p-8 flex flex-col transition-colors">
                <div className="mb-6 flex items-center justify-between">
                  <span className={`inline-block text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest font-semibold ${i % 2 === 0 ? 'bg-brand-red' : 'bg-brand-gold'}`}>
                    {m.label}
                  </span>
                </div>
                <h3 className="text-2xl font-bold italic mb-3">{m.title}</h3>
                <p className="text-white/55 text-sm leading-7 flex-1 mb-8">{m.desc}</p>
                <Link href="/contact" className="text-brand-gold text-xs uppercase tracking-widest hover:text-white transition-colors">
                  {m.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CULTURE CODE ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black italic mb-4">One Body. One Standard.</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto leading-7">
          Every ministry operates under the same culture code: Be Real, Be Humble,
          Be Accountable, Be Set Apart, Be Transformed, Be Loving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/contact" className="bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors">Get Involved</Link>
          <Link href="/about" className="border border-white/40 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors">Our Story</Link>
        </div>
      </section>

      {/* ───────── WHAT WE OFFER ───────── */}
      <section className="bg-brand-red-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>How We Serve You</SectionLabel>
            <h2 className="text-4xl font-bold italic">What We Offer</h2>
            <Divider />
          </div>
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.num} className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col sm:flex-row gap-6 items-start">
                <div className="min-w-[50px]">
                  <p className="text-brand-red text-2xl font-black italic">{s.num}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold italic mb-1">{s.title}</h3>
                  <p className="text-brand-gold/70 text-xs uppercase tracking-widest mb-3">{s.detail}</p>
                  <p className="text-white/55 text-sm leading-7">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SCRIPTURE ───────── */}
      <section className="bg-brand-mid py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-display italic text-2xl md:text-3xl text-white/80 leading-relaxed">
            &ldquo;The Spirit of the Lord is on me, because he has anointed me
            to proclaim good news… to set the oppressed free.&rdquo;
          </p>
          <p className="text-brand-gold text-sm mt-4 tracking-widest uppercase">Luke 4:18</p>
          <Divider />
          <Link href="/contact" className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  )
}
