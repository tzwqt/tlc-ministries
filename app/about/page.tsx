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

const ministryRoles = [
  "Marriage Ministry & Retreat Leadership",
  "Women's Discipleship",
  "Prison Ministry",
  "Intercessory Prayer Leadership",
  "Prophetic Team Coordination",
  "Deliverance & Inner Healing Oversight",
  "Private Ministry Counseling",
]

const pillars = [
  { title: "Truth", desc: "We believe real freedom comes through knowing and walking in truth — no matter how uncomfortable." },
  { title: "Identity", desc: "We help people discover who God says they are, not who the world told them to be." },
  { title: "Healing", desc: "We create space for emotional, spiritual, and relational healing through the power of Jesus Christ." },
  { title: "Discipleship", desc: "We don't just want converts — we build disciples who carry the Kingdom wherever they go." },
]

const beliefs = [
  { title: "The Scripture", verse: "2 Timothy 3:16–17", body: "We believe the Bible is the inspired, infallible, and authoritative Word of God. It is the final standard for faith and practice in every believer's life." },
  { title: "The Trinity", verse: "Matthew 28:19", body: "We believe in one God eternally existing in three persons — Father, Son, and Holy Spirit — equal in nature, power, and glory." },
  { title: "Jesus Christ", verse: "John 1:14", body: "We believe Jesus Christ is fully God and fully man. He was born of a virgin, lived a sinless life, was crucified for our sins, rose bodily from the dead, and ascended to the Father." },
  { title: "Salvation", verse: "Ephesians 2:8–9", body: "We believe salvation is by grace alone, through faith alone, in Christ alone. It cannot be earned — it is a gift from God received through repentance and belief." },
  { title: "The Holy Spirit", verse: "Acts 1:8", body: "We believe in the person and active work of the Holy Spirit, who convicts, regenerates, seals, and empowers every believer for life and ministry." },
  { title: "The Church", verse: "Matthew 16:18", body: "We believe in the local church as the body of Christ — called to worship, discipleship, fellowship, ministry, and evangelism to the world." },
  { title: "Prayer & Deliverance", verse: "James 5:16", body: "We believe in the power of prayer, intercession, and Spirit-led deliverance. God still heals, breaks chains, and sets captives free today." },
  { title: "The Return of Christ", verse: "Revelation 22:12", body: "We believe in the personal, visible, and glorious return of Jesus Christ. Every knee will bow and every tongue confess that He is Lord." },
]

export default function About() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.28),transparent_60%)]" />
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

      {/* ───────── MEET TIFFANY ───────── */}
      <section className="bg-brand-mid py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          <div className="sticky top-28">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/TiffChar.avif" alt="Tiffany Charles" fill className="object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Visionary Leader", "Discipler", "Builder of People"].map((t) => (
                <span key={t} className="bg-brand-red/20 border border-brand-red/30 text-white/70 text-xs px-4 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Founder &amp; Leader</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black italic leading-tight mb-2">
              Meet Tiffany<br />
              <span className="text-brand-gold">Charles</span>
            </h2>
            <Divider />

            <blockquote className="border-l-2 border-brand-red pl-5 mb-8">
              <p className="font-display italic text-white/75 leading-8">
                &ldquo;I desire to do all I can while I can, making a difference and leaving
                a legacy that will impact generations to come for the glory of the Lord.&rdquo;
              </p>
            </blockquote>

            <p className="text-white/60 text-sm mb-6 leading-7">For me, success is defined in seven words:</p>
            <p className="font-display italic text-xl text-brand-gold mb-8">
              &ldquo;Well done, thy good and faithful servant.&rdquo;
            </p>

            <p className="text-white/70 leading-8 mb-5">
              Tiffany Charles is a transformational leader whose life&apos;s work sits at the
              intersection of education, discipleship, and spiritual formation. Originally
              from Myrtle Beach, South Carolina, and now rooted in Houston, Texas, Tiffany
              carries a distinctive blend of executive leadership, pastoral care, and
              prophetic insight.
            </p>
            <p className="text-white/70 leading-8">
              Her calling is clear: to cultivate environments where people encounter God
              deeply, grow intentionally, and walk boldly in their divine identity.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── EDUCATION ───────── */}
      <section className="bg-brand-red-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Background</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold italic">
              Education &amp; Executive Leadership
            </h2>
            <Divider />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-5">Academic</p>
              <ul className="space-y-4 text-white/70 text-sm leading-7">
                <li className="flex gap-3"><span className="text-brand-red mt-1">—</span>Associate&apos;s Degree in Interdisciplinary Studies <em className="text-white/40">(Magna Cum Laude)</em></li>
                <li className="flex gap-3"><span className="text-brand-red mt-1">—</span>Continued studies in Educational Studies</li>
                <li className="flex gap-3"><span className="text-brand-red mt-1">—</span>Master of Business Administration (MBA)</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-5">Professional</p>
              <p className="text-white/70 text-sm leading-7">
                Tiffany currently serves as <strong className="text-white">Director of Admissions</strong> at
                Houston Christian University, overseeing recruitment strategy, leadership development,
                and student engagement. With over a decade in higher education and events leadership,
                she is known for building strong teams, cultivating meaningful relationships, and
                guiding students through pivotal seasons of transition and purpose discovery.
              </p>
              <p className="text-white/50 text-sm mt-4 italic">
                Her professional presence reflects precision, stewardship, and influence —
                while her spiritual mantle carries depth and discernment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MINISTRY HISTORY ───────── */}
      <section className="bg-brand-mid py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>A Life Devoted</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold italic">Ministry Since Age 21</h2>
            <Divider />
            <p className="text-white/55 max-w-2xl mx-auto leading-8 text-sm">
              Ministry has been the foundation of Tiffany&apos;s life since the age of 21.
              Over the years, she has served in high-impact roles including:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {ministryRoles.map((role) => (
              <div key={role} className="bg-brand-card border-l-2 border-brand-red rounded-xl px-6 py-4 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
                <p className="text-white/70 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BE REAL ───────── */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>The Movement</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black italic">
              Be <span className="text-brand-gold">Real</span>
            </h2>
            <Divider />
            <p className="text-white/60 max-w-2xl mx-auto leading-8">
              Out of consecration and obedience, the Lord entrusted Tiffany with a movement called Be Real.
            </p>
          </div>

          <div className="bg-brand-card border border-white/6 rounded-2xl p-8 md:p-10 mb-8 text-center">
            <p className="text-white/70 leading-8 max-w-3xl mx-auto">
              For the past three years, she has stewarded an annual spiritual focus — studying
              deeply with her discipleship community throughout the year. What begins in prayer,
              study, and refinement culminates in an end-of-year conference marked by healing,
              deliverance, clarity, and spiritual activation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-brand-card border border-white/6 rounded-2xl p-8">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-5">Mission</p>
              <p className="text-white/75 leading-8 text-sm mb-4">
                Be Real exists to create transformative encounters with the Lord that extend far
                beyond a moment. The ministry is designed to redirect lives toward the heart of
                God through authenticity, vulnerability, and truth.
              </p>
              <p className="text-white/55 leading-8 text-sm">
                In carefully cultivated environments, individuals are invited into honest surrender.
                There, the Holy Spirit works deeply — bringing healing to the soul, freedom to the
                bound, and restoration to identity.
              </p>
            </div>
            <div className="bg-brand-card border border-white/6 rounded-2xl p-8">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-5">Vision</p>
              <p className="font-display italic text-white/80 text-lg leading-8 mb-5">Be Real is a breaker movement.</p>
              <p className="text-white/55 leading-8 text-sm mb-4">
                It calls believers to walk in power, operate in glory, and move through the
                finished work of Jesus Christ. Rooted in consecration and covenant, the ministry
                raises men and women who confront generational cycles, rise from adversity, and
                carry spiritual authority with humility and reverence.
              </p>
              <p className="text-white/40 text-xs italic leading-6">
                Power flows through surrender, and glory rests on those who remain anchored in the blood of Christ.
              </p>
            </div>
          </div>

          <div className="bg-brand-red rounded-2xl p-8 text-center">
            <p className="font-display italic text-xl md:text-2xl text-white leading-relaxed mb-3">
              We walk in truth, confront with love, and equip believers to abide firmly in Christ.
            </p>
            <p className="text-white/70 text-sm tracking-wide">
              Where truth is lived, love leads correction, and lives are anchored in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── PILLARS ───────── */}
      <section className="bg-brand-red-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>What We Stand On</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold italic">Our Four Pillars</h2>
            <Divider />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-brand-red text-xs tracking-widest uppercase mb-3">0{i + 1}</p>
                <h3 className="text-2xl font-bold italic mb-3">{p.title}</h3>
                <p className="text-white/60 leading-7 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BELIEFS ───────── */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>What We Believe</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold italic">Our Beliefs</h2>
            <Divider />
            <p className="text-white/55 max-w-2xl mx-auto leading-8 text-sm">
              Rooted in Scripture. Anchored in Christ. These are the convictions that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {beliefs.map((b, i) => (
              <div key={b.title} className="bg-brand-card border border-white/6 rounded-2xl p-7">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-brand-gold text-xs tracking-widest uppercase">0{i + 1}</p>
                  <p className="text-white/25 text-xs italic">{b.verse}</p>
                </div>
                <h3 className="text-lg font-bold italic mb-2">{b.title}</h3>
                <p className="text-white/55 leading-7 text-sm">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-brand-red rounded-2xl p-8 text-center">
            <p className="font-display italic text-xl text-white leading-relaxed">
              &ldquo;We are not ashamed of the Gospel of Jesus Christ,
              for it is the power of God unto salvation.&rdquo;
            </p>
            <p className="text-white/70 text-sm mt-3 tracking-widest uppercase">Romans 1:16</p>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="bg-brand-red py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black italic mb-4">Ready to Get Real?</h2>
        <p className="text-white/80 mb-10 max-w-xl mx-auto leading-7">
          Come as you are. Leave transformed. This is what Be Real is about.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-brand-red hover:bg-white/90 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors">
            Connect With Us
          </Link>
          <Link href="/ministries" className="border border-white/40 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors">
            Our Ministries
          </Link>
        </div>
      </section>

    </div>
  )
}
