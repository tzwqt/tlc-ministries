import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

// ─────────────────────────────
// UI COMPONENTS
// ─────────────────────────────
function SocialIcons({ className = "" }: { className?: string }) {
  const icons = [
    { label: "Instagram", href: "#", path: "M16 11.37A4 4 0..." },
    { label: "YouTube", href: "#", path: "M22.54 6.42a2.78..." },
    { label: "Facebook", href: "#", path: "M18 2h-3a5..." },
  ];

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {icons.map((i) => (
        <a
          key={i.label}
          href={i.href}
          className="text-white/50 hover:text-brand-gold transition"
          aria-label={i.label}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d={i.path} stroke="currentColor" strokeWidth="1.6" />
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

// ─────────────────────────────
// PAGE
// ─────────────────────────────
export default function Home() {
  return (
    <div className="bg-brand-dark text-white font-sans">

      {/* ───────── HERO (CINEMATIC) ───────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6">

        {/* VIDEO LAYER (replace later) */}
        <div className="absolute inset-0 bg-black">
          {/* Replace this later with <video autoPlay loop muted> */}
          <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40" />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.18),transparent_60%)]" />

        {/* CONTENT */}
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
            <a
              href="#about"
              className="bg-brand-red hover:bg-brand-red-hover px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition"
            >
              Enter the Movement
            </a>

            <a
              href="#contact"
              className="border border-white/30 hover:border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition"
            >
              Contact
            </a>
          </div>

          <SocialIcons className="justify-center mt-10" />
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-8 text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </div>
      </section>

      {/* ───────── ABOUT ───────── */}
      <section id="about" className="bg-white text-brand-dark py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Welcome</SectionLabel>

          <h2 className="text-4xl md:text-5xl font-bold italic">
            Welcome to Be Real Global Ministry
          </h2>

          <Divider />

          <p className="text-brand-dark/70 text-lg leading-8">
            This is not just a ministry — it is a movement of healing, truth, deliverance, and transformation
            through Jesus Christ.
          </p>
        </div>
      </section>

      {/* ───────── FOUNDER ───────── */}
      <section className="bg-brand-mid py-28 px-6">
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
            <SectionLabel>Founder</SectionLabel>

            <h2 className="text-4xl md:text-5xl font-bold italic mb-4">
              Tiffany Charles
            </h2>

            <Divider />

            <p className="text-white/70 leading-8">
              Be Real Global Ministry was birthed from a call to raise people in truth,
              identity, healing, and discipleship — not just moments, but transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── CORE IDENTITY ───────── */}
      <section className="bg-brand-dark py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Core Identity</SectionLabel>

          <h2 className="text-4xl md:text-5xl font-bold italic">
            Mission & Vision
          </h2>

          <Divider />

          <p className="text-white/70 max-w-2xl mx-auto leading-8">
            We exist to bring people into deep intimacy with God through truth, love, and Christ-centered transformation.
          </p>
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
            <div key={t} className="bg-white/10 p-5 rounded-xl border border-white/20">
              <p className="font-bold">{t}</p>
              <p className="text-white/70 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section id="contact" className="bg-brand-dark py-28 px-6 text-center">
        <SectionLabel>Contact</SectionLabel>

        <h2 className="text-4xl md:text-5xl font-bold italic">
          Let’s Connect
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