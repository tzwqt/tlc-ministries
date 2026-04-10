import Image from 'next/image'
import Nav from '@/app/components/Nav'
import ContactForm from '@/app/components/ContactForm'

// ─── Social icons ──────────────────────────────────────────────────────────────

function SocialIcons({ className = '' }: { className?: string }) {
  const icons = [
    {
      label: 'Facebook',
      href: '#',
      path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    },
    {
      label: 'Twitter / X',
      href: '#',
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
    {
      label: 'YouTube',
      href: '#',
      path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
    },
    {
      label: 'Instagram',
      href: '#',
      path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z',
    },
    {
      label: 'LinkedIn',
      href: '#',
      path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    },
  ]

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          aria-label={icon.label}
          className="text-white/50 hover:text-brand-gold transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}

// ─── Divider ───────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div className="flex items-center gap-3 justify-center my-2">
      <div className="h-px w-12 bg-brand-gold/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
      <div className="h-px w-12 bg-brand-gold/60" />
    </div>
  )
}

// ─── Section label ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
      {children}
    </p>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-brand-dark text-white">
      <Nav />

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background — replace the gradient with an actual photo when available:
            Add a <Image> component here with the stage photo of Tiffany, then
            overlay with: className="absolute inset-0 bg-brand-dark/60" */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#0d0f22] to-[#120a1e]" />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(200,16,46,0.08),transparent)]" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">
          <p className="text-white/50 tracking-[0.45em] text-xs uppercase mb-6">
            Become the truly free and
          </p>
          <h1 className="font-display italic font-black text-white leading-none mb-6"
            style={{ fontSize: 'clamp(4rem, 14vw, 9rem)' }}>
            Real You!
          </h1>
          <Divider />
          <p className="font-display italic text-white/70 text-xl leading-relaxed max-w-xl mx-auto mt-6 mb-10">
            &ldquo;Where truth is lived, love leads correction, and lives are anchored in Christ.&rdquo;
          </p>
          <SocialIcons className="justify-center mb-10" />
          <a
            href="#about"
            className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
          >
            Start Your Journey
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <div className="w-px h-10 bg-white/20" />
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section id="about" className="bg-white text-brand-dark py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Welcome</SectionLabel>
          <h2 className="font-display italic text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to Be Real Global Ministry
          </h2>
          <Divider />
          <p className="text-brand-dark/70 leading-8 mt-8 mb-10 text-lg">
            We are honored that you have chosen to join us during this powerful launch. This is
            not just a ministry — it is a movement of people committed to walking in truth,
            living in holiness, and being transformed by the power of God.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            {[
              {
                title: 'Authenticity',
                sub: 'over performance',
                body: 'We create space where you can show up as you truly are — no masks, no pretending.',
              },
              {
                title: 'Transformation',
                sub: 'over appearances',
                body: 'Real change from the inside out. Not just touched, but permanently changed.',
              },
              {
                title: 'Relationship',
                sub: 'over religion',
                body: 'We pursue deep intimacy with the Father, not rituals. Closeness, not performance.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-brand-gold pt-5">
                <p className="font-display italic text-xl font-bold text-brand-dark mb-0.5">
                  {item.title}
                </p>
                <p className="text-brand-gold text-xs uppercase tracking-widest mb-3">
                  {item.sub}
                </p>
                <p className="text-brand-dark/65 text-sm leading-7">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-brand-dark text-white rounded-2xl px-8 py-10 text-center">
            <p className="font-display italic text-lg leading-8 text-white/80 mb-4">
              You are stepping into a space where truth will be spoken, love will correct and
              build, and the Holy Spirit will move.
            </p>
            <p className="text-brand-gold text-sm tracking-widest uppercase font-semibold">
              — Be Real Global Ministry Leadership
            </p>
          </div>
        </div>
      </section>

      {/* ── MEET TIFFANY ── */}
      <section className="bg-brand-mid py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-brand-card flex items-end">
            <Image
              src="/TiffChar.avif"
              alt="Tiffany Charles"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="relative p-6">
              <p className="font-display italic text-white/50 text-sm">Tiffany Charles</p>
              <p className="text-brand-gold text-xs uppercase tracking-widest">Founder</p>
            </div>
            {/* Decorative border accent */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-brand-gold/40 rounded-tr-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-brand-gold/40 rounded-bl-xl" />
          </div>

          <div>
            <SectionLabel>Meet Tiffany</SectionLabel>
            <h2 className="font-display italic text-4xl font-bold text-white mb-4 leading-tight">
              Tiffany Charles
            </h2>
            <Divider />
            <div className="mt-6 space-y-4 text-white/70 leading-8 text-[15px]">
              <p>
                Hi, my name is Tiffany Charles, and I&apos;m the founder of Be Real Global Ministry.
              </p>
              <p>
                <strong className="text-white">TLC</strong> stands for{' '}
                <strong className="text-brand-red">Truth</strong>,{' '}
                <strong className="text-brand-red">Love</strong>, and{' '}
                <strong className="text-brand-red">Christ</strong> — because real transformation
                happens when we encounter all three together.
              </p>
              <p>
                Be Real Global Ministry was birthed from a call to walk with people through
                healing, deliverance, and discipleship — not just in moments, but in process.
              </p>
              <p>
                Across education, leadership, discipleship, and private counsel, Tiffany&apos;s
                life reflects intentional surrender. She believes every generation requires
                covering, clarity, and spiritual maturity — and she is committed to raising
                leaders who are whole, disciplined, and spiritually sound.
              </p>
              <blockquote className="border-l-2 border-brand-gold pl-5 italic text-white/60 my-6">
                &ldquo;I desire to do all I can while I can, making a difference and leaving a
                legacy that will impact generations to come for the glory of the Lord.&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {['Be Real', 'Be Free', 'Be Transformed'].map((motto) => (
                <div key={motto} className="bg-brand-card rounded-lg py-3 px-2">
                  <p className="font-display italic text-brand-gold text-sm font-semibold">
                    {motto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Core Identity</SectionLabel>
            <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white">
              Who We Are
            </h2>
            <Divider />
            <p className="text-white/60 mt-6 max-w-xl mx-auto leading-7">
              We walk in truth, confront with love, and equip believers to abide firmly in Christ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-card rounded-2xl p-8 border border-white/5">
              <div className="w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center mb-5">
                <div className="w-3 h-3 rounded-full bg-brand-gold" />
              </div>
              <h3 className="font-display italic text-2xl font-bold text-white mb-4">
                Mission
              </h3>
              <p className="text-white/65 leading-8 text-sm">
                The mission of Be Real Global Ministry is to cultivate transformative encounters
                with the presence of God that extend far beyond a single moment, event, or
                conference.
              </p>
              <p className="text-white/65 leading-8 text-sm mt-4">
                We exist to initiate life-altering experiences that redirect the trajectory of
                individuals&apos; lives — drawing them into deeper intimacy with the Father and
                anchoring them firmly in Christ.
              </p>
              <p className="text-white/65 leading-8 text-sm mt-4">
                Rooted in authenticity, truth, and holy vulnerability, we create an atmosphere
                where the Holy Spirit moves powerfully to bring deep healing, deliverance, and
                true freedom.
              </p>
            </div>

            <div className="bg-brand-card rounded-2xl p-8 border border-white/5">
              <div className="w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center mb-5">
                <div className="w-3 h-3 rounded-full bg-brand-gold" />
              </div>
              <h3 className="font-display italic text-2xl font-bold text-white mb-4">
                Vision
              </h3>
              <p className="text-white/65 leading-8 text-sm mb-5">
                The vision of Be Real Global Ministry is to raise up a consecrated people who:
              </p>
              <ul className="space-y-2 mb-5">
                {['Walk in truth', 'Carry the glory of God', 'Operate in spiritual power'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-white/65 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <p className="text-white/65 leading-8 text-sm">
                We are called to raise and release <em className="text-white">breakers</em> —
                men and women who destroy generational cycles, dismantle spiritual bondage, and
                establish righteousness. This ministry is for those marked by God to rise, be
                healed, and walk in purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className="bg-brand-mid py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>At Be Real</SectionLabel>
            <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white">
              What to Expect
            </h2>
            <Divider />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '✦',
                title: 'Presence',
                items: ['Strong move of the Holy Spirit', 'Worship that invites encounter'],
              },
              {
                icon: '✦',
                title: 'Truth',
                items: [
                  'Biblical teaching with depth and clarity',
                  'Conviction that leads to transformation',
                ],
              },
              {
                icon: '✦',
                title: 'Freedom',
                items: [
                  'Deliverance and inner healing',
                  'Breaking of strongholds and cycles',
                ],
              },
              {
                icon: '✦',
                title: 'Discipleship',
                items: ['Growth beyond the service', 'Accountability and spiritual development'],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-brand-card rounded-2xl p-6 border border-white/5 flex flex-col"
              >
                <span className="text-brand-gold text-lg mb-4">{card.icon}</span>
                <h3 className="font-display italic text-xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-3 mt-auto">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-white/60 text-sm leading-6">
                      <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATEMENT OF FAITH ── */}
      <section id="beliefs" className="bg-brand-dark py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Statement of Faith</SectionLabel>
          <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white mb-4">
            We Believe
          </h2>
          <Divider />

          <div className="grid sm:grid-cols-2 gap-4 mt-14 text-left">
            {[
              'The Bible is the inspired, living Word of God',
              'Jesus Christ is Lord and Savior',
              'Salvation comes through Jesus alone',
              'The Holy Spirit empowers, transforms, and leads believers',
              'Deliverance and healing are available through Christ',
              'We are called to live holy, set-apart lives',
              'The blood of Jesus is our authority, access, and victory',
            ].map((belief) => (
              <div
                key={belief}
                className="flex items-start gap-4 bg-brand-card rounded-xl px-5 py-4 border border-white/5"
              >
                <span className="text-brand-gold mt-0.5 flex-shrink-0">✦</span>
                <p className="text-white/75 text-sm leading-7">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE CODE ── */}
      <section className="bg-brand-red py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/70 text-xs uppercase tracking-[0.35em] font-semibold mb-3">
            Our Standard
          </p>
          <h2 className="font-display italic text-4xl md:text-6xl font-black text-white mb-4">
            Culture Code: BE REAL
          </h2>
          <p className="text-white/75 text-lg mb-14">At Be Real, we live by this standard.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                letter: 'B',
                title: 'Be Honest',
                body: 'No masks, no pretending.',
              },
              {
                letter: 'E',
                title: 'Be Humble',
                body: 'Teachable and submitted.',
              },
              {
                letter: 'R',
                title: 'Be Accountable',
                body: 'Growth requires responsibility.',
              },
              {
                letter: 'E',
                title: 'Be Set Apart',
                body: 'We pursue holiness.',
              },
              {
                letter: 'A',
                title: 'Be Transformed',
                body: 'Not just touched, but changed.',
              },
              {
                letter: 'L',
                title: 'Be Loving',
                body: 'Reflect Christ in how you treat others.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-2xl p-5 text-left border border-white/20"
              >
                <p className="font-display italic text-4xl font-black text-white/20 mb-2">
                  {item.letter}
                </p>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-white/65 text-xs leading-5">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Services</SectionLabel>
            <h2 className="font-display italic text-4xl md:text-5xl font-bold text-brand-dark">
              Start Your Journey
            </h2>
            <Divider />
            <p className="text-brand-dark/60 mt-6 max-w-xl mx-auto leading-7">
              Through discipleship, teaching, and spiritual activation, we equip believers not
              only to experience transformation but to remain transformed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Personal Counseling',
                desc: 'Guidance and support through life&apos;s challenges in a safe, Spirit-led environment. One-on-one sessions rooted in truth and compassion.',
                duration: '1 hr',
                cta: 'Request to Book',
              },
              {
                title: 'Discipleship Program',
                desc: 'Grow spiritually with dedicated mentoring. A structured journey toward deeper intimacy with God and transformation that lasts.',
                duration: '1 hr',
                cta: 'Book Now',
                featured: true,
              },
              {
                title: 'Prayer Ministry',
                desc: 'Spiritual growth through guided ministry. Targeted prayer for healing, deliverance, and breakthrough in every area of life.',
                duration: '1 hr',
                cta: 'Book Now',
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl p-8 flex flex-col border ${
                  service.featured
                    ? 'bg-brand-dark text-white border-brand-red shadow-xl shadow-brand-red/10'
                    : 'bg-white text-brand-dark border-brand-dark/10 shadow-sm'
                }`}
              >
                {service.featured && (
                  <span className="text-brand-red text-xs uppercase tracking-widest font-semibold mb-3">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`font-display italic text-2xl font-bold mb-3 ${
                    service.featured ? 'text-white' : 'text-brand-dark'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-7 mb-4 flex-1 ${
                    service.featured ? 'text-white/65' : 'text-brand-dark/60'
                  }`}
                  dangerouslySetInnerHTML={{ __html: service.desc }}
                />
                <p
                  className={`text-xs uppercase tracking-widest mb-6 ${
                    service.featured ? 'text-white/40' : 'text-brand-dark/40'
                  }`}
                >
                  {service.duration}
                </p>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full text-sm font-semibold tracking-wide transition-colors ${
                    service.featured
                      ? 'bg-brand-red text-white hover:bg-brand-red-hover'
                      : 'border border-brand-dark/20 text-brand-dark hover:border-brand-dark hover:bg-brand-dark/5'
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK ── */}
      <section className="bg-brand-mid py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Book cover placeholder — replace with <Image src="..." /> when available */}
          <div className="relative mx-auto w-64 aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1206] to-[#0d0a04] shadow-2xl shadow-black/50 flex items-center justify-center border border-white/5">
            <div className="text-center px-6">
              <p className="font-display italic text-white text-3xl font-bold leading-tight mb-2">
                One Sheep
              </p>
              <div className="w-8 h-px bg-white/30 mx-auto my-3" />
              <p className="text-white/40 text-xs tracking-widest uppercase">Tiffany Charles</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold" />
          </div>

          <div>
            <SectionLabel>Latest Book</SectionLabel>
            <h2 className="font-display italic text-4xl font-bold text-white mb-4 leading-tight">
              Check Out My Latest Book
            </h2>
            <Divider />
            <p className="text-white/65 leading-8 text-sm mt-6 mb-4">
              <em className="text-white font-semibold">One Sheep</em> explores the deeper meaning
              behind why the Lord calls us His sheep — revealing that it is not a symbol of
              weakness, but an invitation into intimacy, dependence, and transformation.
            </p>
            <p className="text-white/65 leading-8 text-sm mb-4">
              Through honest reflection and spiritual insight, readers are guided into a posture
              of vulnerability before God, accountability within community, and closeness with
              the Shepherd&apos;s voice.
            </p>
            <p className="text-white/65 leading-8 text-sm mb-8">
              By the end, you will understand that intimacy with the Shepherd is the key the
              Church has often missed — and the foundation for cultivating disciples who can
              faithfully lead others.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              Coming Soon
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>What People Say</SectionLabel>
            <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white">
              Testimonials
            </h2>
            <Divider />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'Tiffany has redefined my perspective on what it truly means to walk in love. She carries a rare balance of grace while still calling you higher, consistently reminding you that you are going to rise into who the Lord has called you to be.',
                name: 'Community Member',
              },
              {
                quote:
                  'Over two years of being discipled by Tiffany, the transformation in my life has been undeniable. I was literally snatched from the pit, overcoming deep mental and emotional battles through the power of God.',
                name: 'Dominique Lewis',
              },
              {
                quote:
                  'Tiffany Charles exemplifies what it truly means to serve as the hands and feet of Jesus. Her approach to counseling is both compassionate and rooted firmly in Scripture — she walks alongside you with patience and wisdom.',
                name: 'Alicea Pickens',
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-brand-card rounded-2xl p-7 border border-white/5 flex flex-col"
              >
                <span className="text-brand-gold text-4xl font-display leading-none mb-4">
                  &ldquo;
                </span>
                <p className="text-white/70 text-sm leading-7 flex-1 italic">{t.quote}</p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBER COMMITMENT ── */}
      <section className="bg-brand-red py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/70 text-xs uppercase tracking-[0.35em] font-semibold mb-3">
            Member Commitment
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl font-black text-white mb-6">
            Are You Ready to Be Planted?
          </h2>
          <p className="text-white/80 text-lg leading-8 max-w-2xl mx-auto mb-12">
            You are not here by accident. God has brought you into a place where you will be
            stretched, healed, transformed — and become everything He has called you to be.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12 text-left">
            {[
              'Living a life of truth and integrity',
              'Remaining teachable and accountable',
              'Pursuing intimacy with God daily',
              'Being consistent in fellowship and growth',
              'Walking in love, honor, and unity',
              'Being open to correction and refinement',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white/10 rounded-xl px-4 py-3 border border-white/20"
              >
                <span className="text-white mt-0.5 flex-shrink-0 text-xs">✦</span>
                <p className="text-white/85 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block bg-white text-brand-red px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            I&apos;m Ready — Let&apos;s Engage
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-brand-dark py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Engage
          </h2>
          <Divider />

          <a
            href="mailto:tlc.ministries.38@gmail.com"
            className="inline-block text-white/50 hover:text-white text-sm mt-6 mb-3 transition-colors"
          >
            tlc.ministries.38@gmail.com
          </a>

          <SocialIcons className="justify-center mt-2 mb-12" />

          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-brand-mid border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display italic text-brand-gold font-semibold">
            Be Real Global Ministry
          </p>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Be Real Global Ministry. All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </footer>
    </div>
  )
}
