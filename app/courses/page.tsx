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

const courses = [
  {
    num: "01",
    title: "Principles of Biblical Counseling for Everyday Life",
    price: "Free",
    desc: "Learn the foundational principles of caring for others through the lens of Scripture. This course equips everyday believers to walk alongside people in pain, confusion, and crisis — bringing the truth and compassion of Jesus into real-life situations.",
    topics: ["Biblical foundations of counseling", "Listening with discernment", "Walking others through grief & trauma", "Truth-centered care vs. secular models"],
  },
  {
    num: "02",
    title: "Growing in Faith: A Discipleship Journey",
    price: "Free",
    desc: "A structured journey through the core disciplines of the Christian life. Designed for believers at every stage — whether you're newly saved or have walked with God for years — this course will deepen your roots and strengthen your walk.",
    topics: ["Prayer and intimacy with God", "The Word as daily foundation", "Identity in Christ", "Accountability and community"],
  },
  {
    num: "03",
    title: "Foundations of Christian Counseling and Ministry",
    price: "Free",
    desc: "A deeper dive into counseling ministry from a Kingdom perspective. This course prepares individuals who feel called to serve in pastoral care, prayer ministry, or discipleship leadership to do so with wisdom, integrity, and spiritual authority.",
    topics: ["Theology of suffering and healing", "Boundaries in ministry", "Deliverance and inner healing principles", "Ethics and confidentiality in ministry"],
  },
]

export default function Courses() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>Learn &amp; Grow</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Online <span className="text-brand-gold">Courses</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Kingdom knowledge — accessible to everyone. These courses are designed
            to equip, train, and activate believers in counseling, discipleship, and ministry.
          </p>
          <div className="mt-6 inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs px-5 py-2 rounded-full uppercase tracking-widest">
            All Courses Free
          </div>
        </div>
      </section>

      {/* ───────── COURSES ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {courses.map((c) => (
            <div key={c.num} className="bg-brand-card border border-white/6 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-10">

                {/* HEADER ROW */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-5">
                    <span className="text-brand-gold font-black italic text-3xl leading-none">{c.num}</span>
                    <h2 className="text-xl md:text-2xl font-bold italic leading-snug">{c.title}</h2>
                  </div>
                  <span className="shrink-0 bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs px-4 py-1.5 rounded-full font-semibold uppercase tracking-widest">
                    {c.price}
                  </span>
                </div>

                {/* DESC */}
                <p className="text-white/60 text-sm leading-7 mb-7">{c.desc}</p>

                {/* TOPICS */}
                <div className="mb-8">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-3">What You&apos;ll Cover</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {c.topics.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-white/55 text-sm">
                        <span className="text-brand-gold mt-1 text-xs">✦</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-block border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white/60 text-xs px-7 py-3 rounded-full uppercase tracking-widest transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── BOTTOM CTA ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center">
        <h2 className="text-4xl font-black italic mb-4">
          Ready to Be Equipped?
        </h2>
        <p className="text-white/80 mb-10 max-w-lg mx-auto leading-7">
          All courses are free because the Kingdom should never be behind a paywall.
          Start learning today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/experience"
            className="border border-white/40 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </section>

    </div>
  )
}
