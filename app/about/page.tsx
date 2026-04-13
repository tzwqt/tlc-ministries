import Image from "next/image"
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

const pillars = [
  {
    title: "Truth",
    desc: "We believe real freedom comes through knowing and walking in truth — no matter how uncomfortable.",
  },
  {
    title: "Identity",
    desc: "We help people discover who God says they are, not who the world told them to be.",
  },
  {
    title: "Healing",
    desc: "We create space for emotional, spiritual, and relational healing through the power of Jesus Christ.",
  },
  {
    title: "Discipleship",
    desc: "We don't just want converts — we build disciples who carry the Kingdom wherever they go.",
  },
]

export default function About() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.15),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>Our Story</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            About <span className="text-brand-gold">Be Real</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            A movement born from a call to raise people in truth, identity, healing,
            and discipleship — not just moments, but transformation.
          </p>
        </div>
      </section>

      {/* ───────── FOUNDER ───────── */}
      <section className="bg-brand-mid py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/TiffChar.avif"
              alt="Tiffany Charles"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionLabel>Founder &amp; Leader</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold italic mb-2">
              Tiffany Charles
            </h2>
            <Divider />
            <p className="text-white/70 leading-8 mb-5">
              Tiffany Charles is the founder of Be Real Global Ministry — a woman whose life
              is a testament that God does not waste pain. Her journey through brokenness,
              identity crisis, and radical encounter with Jesus birthed a burning desire to
              see others walk free.
            </p>
            <p className="text-white/70 leading-8 mb-5">
              With a heart for the real and the raw, Tiffany carries a prophetic and pastoral
              anointing that cuts through religious pretense and invites people into authentic
              relationship with God.
            </p>
            <p className="text-white/70 leading-8">
              She preaches, teaches, and counsels with a conviction rooted in Scripture — and
              her ministry has touched lives through prayer, deliverance, and the simple but
              powerful message:{" "}
              <em className="text-brand-gold">
                be real with God, and He will be real with you.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* ───────── MISSION & VISION ───────── */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Why We Exist</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold italic">
              Mission &amp; Vision
            </h2>
            <Divider />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-card border border-white/6 rounded-2xl p-8">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">Our Mission</p>
              <p className="text-white/80 text-lg font-display italic leading-8">
                &ldquo;To lead people into deep, authentic relationship with Jesus Christ through
                truth, healing, and discipleship — transforming lives from the inside out.&rdquo;
              </p>
            </div>
            <div className="bg-brand-card border border-white/6 rounded-2xl p-8">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">Our Vision</p>
              <p className="text-white/80 text-lg font-display italic leading-8">
                &ldquo;To raise a generation of believers who are unapologetically real with God
                and with each other — set apart, transformed, and fully alive in Christ.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PILLARS ───────── */}
      <section className="bg-brand-mid py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>What We Stand On</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold italic">
              Our Four Pillars
            </h2>
            <Divider />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-brand-card border border-white/6 rounded-2xl p-8">
                <p className="text-brand-gold text-xs tracking-widest uppercase mb-3">
                  0{i + 1}
                </p>
                <h3 className="text-2xl font-bold italic mb-3">{p.title}</h3>
                <p className="text-white/60 leading-7 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black italic mb-4">
          Ready to Get Real?
        </h2>
        <p className="text-white/80 mb-10 max-w-xl mx-auto leading-7">
          Come as you are. Leave transformed. This is what Be Real is about.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
          >
            Connect With Us
          </Link>
          <Link
            href="/ministries"
            className="border border-white/40 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors"
          >
            Our Ministries
          </Link>
        </div>
      </section>

    </div>
  )
}
