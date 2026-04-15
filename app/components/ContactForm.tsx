'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-display italic text-2xl text-brand-red mb-3">
          Thank you for reaching out.
        </p>
        <p className="text-white/60 text-sm">
          We will be in touch soon. You are not here by accident.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-red transition-colors'
  const labelClass = 'block text-white/50 text-xs uppercase tracking-widest mb-2'

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5 w-full max-w-lg mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelClass}>First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={form.firstName}
            onChange={set('firstName')}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={form.lastName}
            onChange={set('lastName')}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={set('email')}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>What's on your heart?</label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          required
          rows={5}
          value={form.message}
          onChange={set('message')}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-3.5 rounded text-sm font-semibold tracking-widest uppercase transition-colors"
      >
        Submit
      </button>
    </form>
  )
}
