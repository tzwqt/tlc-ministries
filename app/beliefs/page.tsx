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

const beliefs = [
  {
    title: "The Scripture",
    verse: "2 Timothy 3:16–17",
    body: "We believe the Bible is the inspired, infallible, and authoritative Word of God. It is the final standard for faith and practice in every believer's life.",
  },
  {
    title: "The Trinity",
    verse: "Matthew 28:19",
    body: "We believe in one God eternally existing in three persons — Father, Son, and Holy Spirit — equal in nature, power, and glory.",
  },
  {
    title: "Jesus Christ",
    verse: "John 1:14",
    body: "We believe Jesus Christ is fully God and fully man. He was born of a virgin, lived a sinless life, was crucified for our sins, rose bodily from the dead, and ascended to the Father.",
  },
  {
    title: "Salvation",
    verse: "Ephesians 2:8–9",
    body: "We believe salvation is by grace alone, through faith alone, in Christ alone. It cannot be earned — it is a gift from God received through repentance and belief.",
  },
  {
    title: "The Holy Spirit",
    verse: "Acts 1:8",
    body: "We believe in the person and active work of the Holy Spirit, who convicts, regenerates, seals, and empowers every believer for life and ministry.",
  },
  {
    title: "The Church",
    verse: "Matthew 16:18",
    body: "We believe in the local church as the body of Christ — called to worship, discipleship, fellowship, ministry, and evangelism to the world.",
  },
  {
    title: "Prayer & Deliverance",
    verse: "James 5:16",
    body: "We believe in the power of prayer, intercession, and Spirit-led deliverance. God still heals, breaks chains, and sets captives free today.",
  },
  {
    title: "The Return of Christ",
    verse: "Revelation 22:12",
    body: "We believe in the personal, visible, and glorious return of Jesus Christ. Every knee will bow and every tongue confess that He is Lord.",
  },
]

export default function Beliefs() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>What We Believe</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Our <span className="text-brand-gold">Beliefs</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Rooted in Scripture. Anchored in Christ. These are the convictions
            that guide everything we do at Be Real Global Ministry.
          </p>
        </div>
      </section>

      {/* ───────── BELIEFS GRID ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          {beliefs.map((b, i) => (
            <div key={b.title} className="bg-brand-card border border-white/6 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-4">
                <p className="text-brand-gold text-xs tracking-widest uppercase">
                  0{i + 1}
                </p>
                <p className="text-white/25 text-xs italic">{b.verse}</p>
              </div>
              <h3 className="text-xl font-bold italic mb-3">{b.title}</h3>
              <p className="text-white/60 leading-7 text-sm">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── STATEMENT BANNER ───────── */}
      <section className="bg-brand-mid py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-display italic text-2xl md:text-3xl text-white/80 leading-relaxed">
            &ldquo;We are not ashamed of the Gospel of Jesus Christ,
            for it is the power of God unto salvation.&rdquo;
          </p>
          <p className="text-brand-gold text-sm mt-4 tracking-widest uppercase">
            Romans 1:16
          </p>
          <Divider />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              href="/services"
              className="bg-brand-red hover:bg-brand-red-hover text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors"
            >
              Ask Us Anything
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
