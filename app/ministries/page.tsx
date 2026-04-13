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
  {
    label: "Youth",
    title: "Be Real Youth",
    desc: "A bold, authentic space for teens and young adults to encounter God, build identity, and do life together — no masks, no pretending, just real faith.",
    cta: "Explore Youth Ministry",
    accent: "bg-brand-red",
  },
  {
    label: "Women",
    title: "Women of Worth",
    desc: "Women healing, growing, and rising together in the truth of who God says they are. A sisterhood built on Scripture, prayer, and genuine community.",
    cta: "Explore Women's Ministry",
    accent: "bg-brand-gold",
  },
  {
    label: "Men",
    title: "Kingdom Men",
    desc: "Raising men who lead with integrity, faith, and purpose. A band of brothers committed to accountability, the Word, and becoming who God called them to be.",
    cta: "Explore Men's Ministry",
    accent: "bg-brand-red",
  },
  {
    label: "Outreach",
    title: "Outreach & Evangelism",
    desc: "Taking the love of Christ beyond the walls of the church — into the streets, communities, and lives of those who need to know they are not forgotten.",
    cta: "Get Involved",
    accent: "bg-brand-gold",
  },
  {
    label: "Prayer",
    title: "Prayer & Deliverance",
    desc: "We believe in the power of Spirit-led intercession and deliverance. This ministry team prays, contends, and believes God for breakthrough in every life.",
    cta: "Join the Prayer Team",
    accent: "bg-brand-red",
  },
  {
    label: "Discipleship",
    title: "Discipleship & Mentorship",
    desc: "One-on-one and small group discipleship rooted in the Word. Growth isn't accidental — it's intentional. We walk with people at every stage of their journey.",
    cta: "Start a Journey",
    accent: "bg-brand-gold",
  },
]

export default function Ministries() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>Where Do You Belong?</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Our <span className="text-brand-gold">Ministries</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Each ministry is a family. Find the one where God is calling you to
            grow, serve, and belong.
          </p>
        </div>
      </section>

      {/* ───────── MINISTRIES GRID ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <div key={m.title} className="bg-brand-card border border-white/6 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <span className={`inline-block ${m.accent} text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest font-semibold`}>
                  {m.label}
                </span>
              </div>
              <h3 className="text-2xl font-bold italic mb-3">{m.title}</h3>
              <p className="text-white/55 text-sm leading-7 flex-1 mb-8">{m.desc}</p>
              <Link
                href="/contact"
                className="text-brand-gold text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                {m.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── CULTURE CODE ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black italic mb-4">
          One Body. One Standard.
        </h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto leading-7">
          Every ministry operates under the same culture code: Be Real, Be Humble,
          Be Accountable, Be Set Apart, Be Transformed, Be Loving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
          >
            Get Involved
          </Link>
          <Link
            href="/about"
            className="border border-white/40 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors"
          >
            Our Story
          </Link>
        </div>
      </section>

    </div>
  )
}
