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

const offerings = [
  {
    title: "Personal Counseling",
    duration: "1 hr",
    desc: "A one-on-one session rooted in Scripture and guided by the Holy Spirit. Whether you're walking through grief, identity struggles, relationship challenges, or spiritual warfare — this is a safe, confidential space to receive truth, prayer, and practical guidance.",
    tag: "Private Session",
    cta: "Request to Book",
    style: "outline",
  },
  {
    title: "Discipleship Program",
    duration: "1 hr",
    desc: "Intentional, structured discipleship designed to take you deeper in your walk with God. Sessions cover the Word, prayer, identity, spiritual disciplines, and personal growth. This is not a class — it is a covenant journey.",
    tag: "Ongoing Journey",
    cta: "Book Now",
    style: "filled",
  },
  {
    title: "Prayer Ministry",
    duration: "1 hr",
    desc: "Come and receive Spirit-led prayer. Whether you need breakthrough, healing, deliverance, or simply want to be covered in intercession — Tiffany and the prayer team stand ready to contend with you before the throne of God.",
    tag: "Ministry Session",
    cta: "Book Now",
    style: "filled",
  },
]

export default function Experience() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>One on One</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Let&apos;s Change <span className="text-brand-gold">Your Life</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Real transformation doesn&apos;t happen in a crowd — it happens in the
            room. Book a personal session and take your next step.
          </p>
        </div>
      </section>

      {/* ───────── OFFERINGS ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="bg-brand-card border border-white/6 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8"
            >
              {/* TEXT */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-red/20 text-brand-red text-xs px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
                    {o.tag}
                  </span>
                  <span className="text-white/30 text-xs">{o.duration}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold italic mb-4">{o.title}</h2>
                <p className="text-white/55 text-sm leading-7">{o.desc}</p>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className={`block text-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                    o.style === "filled"
                      ? "bg-brand-red hover:bg-brand-red-hover text-white"
                      : "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black"
                  }`}
                >
                  {o.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── NOTE ───────── */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-mid border border-white/5 rounded-2xl p-6 text-center">
            <p className="text-white/40 text-sm leading-7">
              All sessions are confidential. After booking, you will be contacted to confirm
              availability and receive session details.{" "}
              <a
                href="mailto:tlc.ministries.38@gmail.com"
                className="text-brand-gold hover:text-white transition-colors"
              >
                Questions? Email us.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ───────── QUOTE ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center mt-10">
        <div className="max-w-3xl mx-auto">
          <p className="font-display italic text-2xl md:text-3xl text-white leading-relaxed mb-4">
            &ldquo;The thief comes only to steal and kill and destroy.
            I came that they may have life and have it abundantly.&rdquo;
          </p>
          <p className="text-white/70 text-sm tracking-widest uppercase">John 10:10</p>
          <Divider />
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  )
}
