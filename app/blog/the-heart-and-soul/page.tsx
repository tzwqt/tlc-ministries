import Link from "next/link"

export default function PostHeartAndSoul() {
  return (
    <div className="bg-brand-dark text-white">

      {/* HERO */}
      <div className="h-72 md:h-96 bg-gradient-to-b from-rose-900 via-brand-dark to-brand-dark" />

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 -mt-20 relative z-10 pb-24">

        <div className="mb-8">
          <span className="bg-brand-red text-white text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-semibold">
            Spiritual Counseling
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black italic leading-tight mb-4">
          The Heart and Soul: Understanding the Inner Life
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
            The Bible speaks more about the heart than almost any other subject. From Proverbs 4:23 —
            <em className="text-white/90"> &ldquo;Guard your heart above all else, for everything you do flows from it&rdquo;</em> —
            to the words of Jesus in Matthew 5, God has always been deeply concerned with what is
            happening on the inside.
          </p>

          <p>
            But in a culture that rewards performance, appearance, and achievement, many of us have
            learned to tend to everything on the outside while the inner life quietly suffers.
          </p>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">What Is the Inner Life?</h2>

          <p>
            The inner life refers to the unseen reality of your soul — your thoughts, emotions, will,
            desires, wounds, and beliefs. It is the part of you that God sees fully and completely,
            even when no one else can.
          </p>

          <p>
            Jesus said it plainly: <em className="text-white/90">&ldquo;Blessed are the pure in heart, for they shall see God.&rdquo;</em>
            Purity of heart is not about perfection — it is about alignment. It is about a soul that
            is turned toward God rather than away from Him.
          </p>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">Why God Cares About Your Soul</h2>

          <p>
            God does not just want your obedience — He wants your heart. The entire story of Scripture
            is a love story between God and the souls of people. From the garden to the cross, God
            has been pursuing the wholeness of the human soul.
          </p>

          <p>
            This is why Jesus came not just to forgive our sins but to heal what sin had broken in us.
            Isaiah 61 describes His mission as binding up the brokenhearted, freeing the captives,
            comforting those who mourn. This is soul work.
          </p>

          <h2 className="text-2xl font-bold italic text-white mt-10 mb-4">Tending to Your Soul</h2>

          <p>
            Soul care is not a luxury — it is obedience. When we neglect our inner life, we become
            spiritually depleted, relationally reactive, and unable to carry the weight of our calling.
          </p>

          <p>
            Here are three ways to begin tending to your soul:
          </p>

          <ul className="space-y-3 list-none pl-0">
            {[
              ["Honest prayer", "Not polished prayers, but raw ones. Tell God exactly what is happening inside you."],
              ["Stillness", "God speaks in the quiet. Create space daily to stop, breathe, and listen."],
              ["Accountability", "Healing rarely happens in isolation. Find someone safe to walk with you."],
            ].map(([title, desc]) => (
              <li key={title as string} className="flex gap-3 items-start">
                <span className="text-brand-gold mt-1">—</span>
                <span><strong className="text-white">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>

          <p className="text-white/90 font-display italic text-xl mt-10">
            &ldquo;Your soul is worth tending to. And God is worth encountering in the deep places.&rdquo;
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
