import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

function SocialIcons({ className = "" }: { className?: string }) {
  const icons = [
    { label: "Instagram", href: "#", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
    { label: "YouTube", href: "#", path: "M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
    { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  ];

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {icons.map((i) => (
        <a key={i.label} href={i.href} className="text-white/50 hover:text-brand-gold transition-colors" aria-label={i.label}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d={i.path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ))}
    </div>
  );
}

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="h-px w-12 bg-brand-gold/60" />
    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
    <div className="h-px w-12 bg-brand-gold/60" />
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-3">
    {children}
  </p>
);

export default function Home() {
  return (
    <div className="bg-brand-dark text-white font-sans">

      {/* ───────── HERO ───────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.30),transparent_65%)]" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-white/50 tracking-[0.4em] uppercase text-xs mb-6">
            Be Real • Be Transformed • Be Set Apart
          </p>
          <h1 className="text-6xl md:text-8xl font-black italic leading-none">
            Become the <span className="text-brand-gold">Real You</span>
          </h1>
          <Divider />
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-8">
            A movement where truth is lived, love leads correction, and lives are anchored in Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="#about" className="bg-brand-red hover:bg-brand-red-hover px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors">
              Enter the Movement
            </a>
            <a href="#contact" className="border border-white/30 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-colors">
              Contact
            </a>
          </div>
          <SocialIcons className="justify-center mt-10" />
        </div>

        <div className="absolute bottom-8 text-white/30 text-xs tracking-widest uppercase animate-bounce">
          Scroll
        </div>
      </section>

      {/* ───────── WELCOME ───────── */}
      <section id="about" className="bg-brand-red-dark py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Welcome</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold italic">
            Welcome to Be Real Global Ministry
          </h2>
          <Divider />
          <p className="text-white/70 text-lg leading-8 max-w-2xl mx-auto">
            This is not just a ministry — it is a movement of healing, truth, deliverance,
            and transformation through Jesus Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/about" className="bg-brand-red hover:bg-brand-red-hover px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm transition-colors">
              Our Story
            </Link>
            <Link href="/ministries" className="border border-white/30 hover:border-white px-8 py-3.5 rounded-full uppercase tracking-widest text-sm transition-colors">
              Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── FOUNDER ───────── */}
      <section className="bg-brand-mid py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image src="/TiffChar.avif" alt="Tiffany Charles" fill className="object-cover" />
          </div>
          <div>
            <SectionLabel>Founder</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold italic mb-4">
              Tiffany Charles
            </h2>
            <Divider />
            <p className="text-white/70 leading-8 mb-6">
              Be Real Global Ministry was birthed from a call to raise people in truth,
              identity, healing, and discipleship — not just moments, but transformation.
            </p>
            <blockquote className="border-l-2 border-brand-red pl-5 mb-8">
              <p className="font-display italic text-white/60 leading-8">
                &ldquo;I desire to do all I can while I can, making a difference and leaving
                a legacy that will impact generations to come for the glory of the Lord.&rdquo;
              </p>
            </blockquote>
            <Link href="/about" className="text-brand-gold hover:text-white text-sm uppercase tracking-widest transition-colors">
              Read Her Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── CORE IDENTITY ───────── */}
      <section className="bg-brand-red-dark py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Core Identity</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold italic">
            Mission &amp; Vision
          </h2>
          <Divider />
          <p className="text-white/70 max-w-2xl mx-auto leading-8 mb-14">
            We exist to bring people into deep intimacy with God through truth, love,
            and Christ-centered transformation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">Mission</p>
              <p className="text-white/75 font-display italic leading-8">
                &ldquo;To redirect lives toward the heart of God through authenticity, vulnerability, and truth.&rdquo;
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">Vision</p>
              <p className="text-white/75 font-display italic leading-8">
                &ldquo;To raise a generation who walk in power, confront cycles, and carry spiritual authority with humility.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CULTURE CODE ───────── */}
      <section className="bg-brand-red py-28 px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black italic mb-6">
          Culture Code: BE REAL
        </h2>
        <p className="text-white/80 mb-14">
          At Be Real, this is our standard of living.
        </p>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[
            ["Be Honest", "No masks, no pretending"],
            ["Be Humble", "Teachable and submitted"],
            ["Be Accountable", "Growth requires responsibility"],
            ["Be Set Apart", "We pursue holiness"],
            ["Be Transformed", "Not just touched, but changed"],
            ["Be Loving", "Reflect Christ in all we do"],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/10 p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <p className="font-bold">{t}</p>
              <p className="text-white/70 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── WHAT WE OFFER ───────── */}
      <section className="bg-brand-mid py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>How We Serve</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold italic">
            What We Offer
          </h2>
          <Divider />
          <div className="grid sm:grid-cols-3 gap-6 mt-4 text-left">
            {[
              { title: "Personal Counseling", desc: "One-on-one sessions rooted in Scripture, led by the Holy Spirit.", link: "/experience" },
              { title: "Discipleship", desc: "Intentional journeys designed to take you deeper in your walk with God.", link: "/experience" },
              { title: "Online Courses", desc: "Free biblical education accessible to everyone, anywhere.", link: "/courses" },
            ].map((item) => (
              <Link key={item.title} href={item.link} className="group bg-brand-card border border-white/6 hover:border-brand-red/40 rounded-2xl p-8 transition-colors">
                <h3 className="font-bold italic text-lg mb-3 group-hover:text-brand-red transition-colors">{item.title}</h3>
                <p className="text-white/50 text-sm leading-7">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section id="contact" className="bg-brand-dark py-28 px-6 text-center">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold italic">
          Let&apos;s Connect
        </h2>
        <Divider />
        <p className="text-white/60 mb-10">
          tlc.ministries.38@gmail.com
        </p>
        <SocialIcons className="justify-center mb-10" />
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
