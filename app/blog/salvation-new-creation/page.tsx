import Link from "next/link"

export default function PostSalvation() {
  return (
    <div className="bg-brand-dark text-white">

      {/* HERO */}
      <div className="h-72 md:h-96 bg-gradient-to-b from-sky-900 via-brand-dark to-brand-dark" />

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 -mt-20 relative z-10 pb-24">

        <div className="mb-8">
          <span className="bg-brand-red text-white text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-semibold">
            Soul Maintenance
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black italic leading-tight mb-4">
          Salvation: Living as a New Creation in Christ
        </h1>

        <div className="flex items-center gap-4 text-white/35 text-xs mb-10 pb-10 border-b border-white/8">
          <span>Jan 16</span>
          <span>·</span>
          <span>8 min read</span>
          <span>·</span>
          <span>By Tiffany Charles</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-white/70 leading-8">
          <p>
            <em className="text-white/90">&ldquo;Therefore, if anyone is in Christ, he is a new creation. The old has passed away;
            behold, the new has come.&rdquo;</em> — 2 Corinthians 5:17
          </p>

          <p>
            This verse may be one of the most quoted in the Bible — and one of the least lived.
            We know the words. We can recite them. But many believers still walk around carrying
            the weight of who they were before, unsure of who they are now.
          </p>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">Salvation Is More Than a Transaction</h2>

          <p>
            Many people understand salvation as a one-time event: you prayed a prayer, you&apos;re
            going to heaven, and now you try to be a better person. But Scripture presents salvation
            as something far more radical and ongoing.
          </p>

          <p>
            When Paul says you are a <em className="text-white/90">new creation</em>, he is using the same Greek word — <em>ktisis</em> —
            used to describe God&apos;s original act of creation. You are not patched up. You are not
            improved. You are re-made.
          </p>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">The War Between Old and New</h2>

          <p>
            So why does it not always feel like we are new? Because there is a war. Romans 7 describes
            it honestly — Paul himself wrestled with the pull of old patterns even while knowing the
            truth of who he was in Christ.
          </p>

          <p>
            The old man does not go down without a fight. But here is the truth: it has already been
            defeated at the cross. You are not fighting for victory — you are fighting from it.
          </p>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">How to Live as a New Creation Daily</h2>

          <ul className="space-y-3 list-none pl-0">
            {[
              ["Renew your mind", "Romans 12:2 — You are transformed by the renewing of your mind. Feed your mind the truth of who God says you are."],
              ["Put on the new self", "Ephesians 4:24 — Salvation is not automatic maturity. You cooperate with it through choices, daily surrender, and obedience."],
              ["Reject false identity", "Every time the enemy whispers your old name — failure, broken, unworthy — reply with your new one."],
              ["Walk in the Spirit", "Galatians 5:16 — The Spirit and the flesh are at war. Walking in the Spirit is a daily, moment-by-moment choice."],
            ].map(([title, desc]) => (
              <li key={title as string} className="flex gap-3 items-start">
                <span className="text-brand-gold mt-1">—</span>
                <span><strong className="text-white">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>

          <p className="text-white/90 font-display italic text-xl mt-10">
            &ldquo;You are not who you were. You are not even who you are becoming.
            You are who God says you are — right now, by faith.&rdquo;
          </p>
        </div>

        <div className="mt-14 pt-10 border-t border-white/8">
          <Link href="/blog" className="text-brand-gold hover:text-white text-sm uppercase tracking-widest transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  )
}
