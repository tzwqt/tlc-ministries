import ContactForm from "@/app/components/ContactForm"

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

const socialIcons = [
  {
    label: "Instagram",
    href: "#",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
]

export default function Contact() {
  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.15),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>Reach Out</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black italic leading-none">
            Let&apos;s <span className="text-brand-gold">Connect</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8">
            Whether you have a question, need prayer, or simply want to know more —
            we&apos;d love to hear from you. You are not here by accident.
          </p>
        </div>
      </section>

      {/* ───────── CONTACT CONTENT ───────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT — INFO */}
          <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="text-4xl font-bold italic mb-6">We&apos;re Here for You</h2>

            <p className="text-white/60 leading-8 mb-10">
              No question is too small, no burden too heavy. Reach out by email,
              follow us on social media, or fill out the form — we read every message.
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-brand-card border border-white/6 rounded-xl p-6">
                <p className="text-brand-gold text-xs tracking-widest uppercase mb-2">Email</p>
                <a
                  href="mailto:tlc.ministries.38@gmail.com"
                  className="text-white hover:text-brand-gold transition-colors text-sm"
                >
                  tlc.ministries.38@gmail.com
                </a>
              </div>

              <div className="bg-brand-card border border-white/6 rounded-xl p-6">
                <p className="text-brand-gold text-xs tracking-widest uppercase mb-2">Sunday Service</p>
                <p className="text-white/70 text-sm">Every Sunday · 10:00 AM</p>
              </div>

              <div className="bg-brand-card border border-white/6 rounded-xl p-6">
                <p className="text-brand-gold text-xs tracking-widest uppercase mb-3">Follow Us</p>
                <div className="flex items-center gap-4">
                  {socialIcons.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="text-white/40 hover:text-brand-gold transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d={s.path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 border-brand-gold pl-5">
              <p className="font-display italic text-white/60 leading-8 text-sm">
                &ldquo;Come to me, all you who are weary and burdened,
                and I will give you rest.&rdquo;
              </p>
              <p className="text-brand-gold/60 text-xs mt-2 tracking-widest uppercase">Matthew 11:28</p>
            </blockquote>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-brand-card border border-white/6 rounded-2xl p-8">
            <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-2">Send a Message</p>
            <h3 className="text-2xl font-bold italic mb-6">What&apos;s on Your Heart?</h3>
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  )
}
