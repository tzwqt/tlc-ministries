'use client'

import { useState } from 'react'
import Link from 'next/link'

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="h-px w-12 bg-brand-gold/60" />
    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
    <div className="h-px w-12 bg-brand-gold/60" />
  </div>
)

const posts = [
  {
    slug: 'the-heart-and-soul',
    title: 'The Heart and Soul: Understanding the Inner Life',
    excerpt: 'What does it mean to tend to your soul? In this post we explore the biblical understanding of the inner life — and why God cares so deeply about what is happening beneath the surface.',
    category: 'Spiritual Counseling',
    date: 'Jan 15',
    read: '8 min read',
    gradient: 'from-rose-900 via-brand-dark to-brand-dark',
  },
  {
    slug: 'true-breaker-in-a-generation',
    title: 'What Is a True Breaker in a Generation?',
    excerpt: 'Not everyone who carries authority uses it. A generational breaker is someone who refuses to pass trauma, sin patterns, and broken cycles forward — and instead plants something new.',
    category: 'Generational Breaker',
    date: 'Jan 15',
    read: '8 min read',
    gradient: 'from-amber-900 via-brand-dark to-brand-dark',
  },
  {
    slug: 'salvation-new-creation',
    title: 'Salvation: Living as a New Creation in Christ',
    excerpt: 'Being saved is not just a past event — it is an ongoing reality. This post unpacks what it truly means to be a new creation and how that truth is meant to transform how we live every day.',
    category: 'Soul Maintenance',
    date: 'Jan 16',
    read: '8 min read',
    gradient: 'from-sky-900 via-brand-dark to-brand-dark',
  },
]

const categories = ['All Posts', 'Spiritual Counseling', 'Soul Wounds', 'Soul Maintenance', 'Generational Breaker']

export default function Blog() {
  const [active, setActive] = useState('All Posts')

  const filtered = active === 'All Posts'
    ? posts
    : posts.filter((p) => p.category === active)

  return (
    <div className="bg-brand-dark text-white">

      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">Words &amp; Wisdom</p>
          <h1 className="text-5xl md:text-7xl font-black italic leading-tight">
            Creating Your<br />
            <span className="text-brand-gold">Dream Life</span>
          </h1>
          <Divider />
          <p className="text-white/60 text-lg leading-8 max-w-xl">
            Insights on faith, identity, healing, and living set apart — written to
            equip and activate you in your walk with God.
          </p>
        </div>
      </section>

      {/* ───────── CATEGORY FILTER ───────── */}
      <div className="sticky top-16 z-30 bg-brand-dark/95 backdrop-blur-sm border-b border-white/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 text-xs px-4 py-2 rounded-full uppercase tracking-widest transition-colors ${
                active === c
                  ? 'bg-brand-red text-white'
                  : 'text-white/45 hover:text-white border border-white/10 hover:border-white/30'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* ───────── POSTS GRID ───────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-white/40 text-center py-20 text-sm">
              No posts in this category yet. Check back soon.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-brand-card border border-white/6 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
                >
                  {/* THUMBNAIL */}
                  <div className={`h-44 bg-gradient-to-b ${post.gradient} flex items-end p-5`}>
                    <span className="bg-black/40 text-white/70 text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-white/30 text-xs mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.read}</span>
                    </div>
                    <h2 className="font-bold italic text-lg leading-snug mb-3 group-hover:text-brand-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/50 text-sm leading-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
