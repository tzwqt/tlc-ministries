import Link from "next/link"

export default function PostTrueBreaker() {
  return (
    <div className="bg-brand-dark text-white">

      {/* HERO */}
      <div className="h-72 md:h-96 bg-gradient-to-b from-amber-900 via-brand-dark to-brand-dark" />

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 -mt-20 relative z-10 pb-24">

        <div className="mb-8">
          <span className="bg-brand-gold text-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-semibold">
            Generational Breaker
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black italic leading-tight mb-4">
          What Is a True Breaker in a Generation?
        </h1>

        <div className="flex items-center gap-4 text-white/35 text-xs mb-10 pb-10 border-b border-white/8">
          <span>Jan 15</span>
          <span>·</span>
          <span>8 min read</span>
          <span>·</span>
          <span>By Tiffany Charles</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-white/70 leading-8">
          <p>
            The word <em className="text-white/90">&ldquo;breaker&rdquo;</em> is powerful. It carries the image of something being
            fractured, interrupted, redirected. And in a spiritual context, a generational breaker is
            exactly that — someone whose life marks the end of one chapter and the beginning of another
            for their entire family line.
          </p>

          <p>
            We are living in a generation that God is raising up to break cycles. Not just talk about
            them — break them.
          </p>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">What Generational Cycles Look Like</h2>

          <p>
            Generational cycles are patterns that repeat across families — addiction, poverty mindsets,
            broken relationships, fear, anger, sexual sin, depression, and spiritual emptiness. They
            are not coincidences. They are evidence of something that has been sown and not yet
            uprooted.
          </p>

          <p>
            Exodus 20:5 references the sins of the fathers being visited on the children. But Ezekiel
            18 makes it clear: <em className="text-white/90">&ldquo;The son shall not bear the iniquity of the father.&rdquo;</em>
            There is a breaking point available — and someone has to choose it.
          </p>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">The Mark of a True Breaker</h2>

          <p>
            A true generational breaker is not just someone who has a hard life story. It is someone
            who has allowed God to do the deep work of transformation — and then plants intentionally
            so that what comes after them carries something different.
          </p>

          <ul className="space-y-3 list-none pl-0">
            {[
              ["They confront, not avoid", "Breakers do not run from hard conversations, unresolved wounds, or uncomfortable truths."],
              ["They are submitted", "True authority flows from submission. Breakers are under God before they walk in power."],
              ["They plant intentionally", "They think beyond themselves — their prayers, choices, and obedience are seeds for the next generation."],
              ["They carry humility", "Breaking cycles is not a badge. It is an act of love and obedience, done quietly and faithfully."],
            ].map(([title, desc]) => (
              <li key={title as string} className="flex gap-3 items-start">
                <span className="text-brand-gold mt-1">—</span>
                <span><strong className="text-white">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">You Are Not Too Late</h2>

          <p>
            If you are reading this and you can see the patterns in your family line — the shame, the
            addiction, the brokenness — that awareness is a gift. It is God showing you what He
            wants to heal and what He wants to end with you.
          </p>

          <p className="text-white/90 font-display italic text-xl mt-10">
            &ldquo;You were not born into your cycle to repeat it.
            You were born into it to end it.&rdquo;
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
