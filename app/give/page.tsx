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

const givingOptions = [
  {
    platform: "Cash App",
    handle: "$BRGMinistry",
    desc: "Tap, send, done. The fastest way to sow into the ministry.",
    color: "bg-[#00D64F]",
  },
  {
    platform: "Venmo",
    handle: "@BeRealGlobal",
    desc: "Send your offering or tithe directly through Venmo.",
    color: "bg-[#3D95CE]",
  },
  {
    platform: "Zelle",
    handle: "tlc.ministries.38@gmail.com",
    desc: "Give securely through Zelle using our ministry email.",
    color: "bg-[#6C1CD1]",
  },
  {
    platform: "PayPal",
    handle: "paypal.me/BRGMinistry",
    desc: "International givers and credit card giving available.",
    color: "bg-[#009CDE]",
  },
]

const reasons = [
  ["Fund the Gospel", "Every gift helps us preach, teach, and reach more people with the message of Jesus Christ."],
  ["Support Ministry", "Your giving covers prayer events, counseling, discipleship programs, and outreach."],
  ["Build the Kingdom", "We are building something that outlasts us. Your investment is an eternal one."],
]

export default function Give() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>Sow Into the Kingdom</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Give <span className="text-brand-gold">Generously</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Every seed sown into Be Real Global Ministry advances the Gospel,
            funds transformation, and impacts lives for eternity.
          </p>
        </div>
      </section>

      {/* ───────── SCRIPTURE ───────── */}
      <section className="bg-brand-mid py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-display italic text-2xl md:text-3xl text-white/80 leading-relaxed">
            &ldquo;Each of you should give what you have decided in your heart
            to give, not reluctantly or under compulsion, for God loves a
            cheerful giver.&rdquo;
          </p>
          <p className="text-brand-gold text-sm mt-4 tracking-widest uppercase">
            2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* ───────── GIVING OPTIONS ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Ways to Give</SectionLabel>
            <h2 className="text-4xl font-bold italic">Choose Your Method</h2>
            <Divider />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {givingOptions.map((g) => (
              <div key={g.platform} className="bg-brand-card border border-white/6 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`${g.color} w-10 h-10 rounded-xl`} />
                  <p className="font-bold text-lg">{g.platform}</p>
                </div>
                <p className="text-brand-gold font-mono text-sm mb-3">{g.handle}</p>
                <p className="text-white/55 text-sm leading-7">{g.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-xs mt-8">
            All giving is processed securely. For questions, contact us at{" "}
            <a href="mailto:tlc.ministries.38@gmail.com" className="text-brand-gold hover:text-white transition-colors">
              tlc.ministries.38@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* ───────── WHY GIVE ───────── */}
      <section className="bg-brand-mid py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Your Impact</SectionLabel>
            <h2 className="text-4xl font-bold italic">Why Your Gift Matters</h2>
            <Divider />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {reasons.map(([title, desc]) => (
              <div key={title} className="bg-brand-card border border-white/6 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold italic mb-3 text-brand-gold">{title}</h3>
                <p className="text-white/55 text-sm leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center">
        <h2 className="text-4xl font-black italic mb-4">
          Sow a Seed Today
        </h2>
        <p className="text-white/80 mb-6 max-w-lg mx-auto leading-7">
          Your generosity is not just a gift — it&apos;s a partnership in the work
          God is doing through Be Real Global Ministry.
        </p>
        <p className="text-white/60 text-sm mb-10">
          Questions? Reach us at{" "}
          <a href="mailto:tlc.ministries.38@gmail.com" className="underline hover:text-white transition-colors">
            tlc.ministries.38@gmail.com
          </a>
        </p>
        <Link
          href="/contact"
          className="bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
        >
          Contact Us
        </Link>
      </section>

    </div>
  )
}
