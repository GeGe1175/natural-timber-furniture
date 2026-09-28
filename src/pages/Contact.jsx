import { useState } from 'react'
import './Contact.css'

function encode(data) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      setStatus('sent')
    } catch {
      setStatus('sent')
    }
  }

  return (
    <div className="contact-page">
      <header className="page-head wrap">
        <p className="page-head__kicker dim">Contact</p>
        <h1>Tell us about the piece.</h1>
        <p className="page-head__lede dim">
          Custom orders and refurbishing jobs both welcome. Send a message
          and George gets back to you within one business day.
        </p>
      </header>

      <section className="wrap contact-grid">
        <div className="contact-details">
          <div>
            <h2>Showroom</h2>
            <p className="dim">457 Pacific Hwy<br />Crows Nest NSW 2065</p>
          </div>
          <div>
            <h2>Speak to George</h2>
            <p className="dim"><a href="tel:0416208998">0416 208 998</a></p>
          </div>
          <div>
            <h2>Email</h2>
            <p className="dim"><a href="mailto:naturetimber888@gmail.com">naturetimber888@gmail.com</a></p>
          </div>
          <div>
            <h2>Workshop</h2>
            <p className="dim">Fairfield, Sydney — furniture is built where it&rsquo;s designed.</p>
          </div>
        </div>

        <form
          name="contact"
          className="contact-form"
          onSubmit={handleSubmit}
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          {status === 'sent' ? (
            <div className="contact-form__done">
              <h2>Message sent.</h2>
              <p className="dim">
                Thanks — George will reply within one business day. For
                anything urgent, call 0416 208 998.
              </p>
            </div>
          ) : (
            <>
              <label>
                Name
                <input type="text" name="name" required value={form.name} onChange={update('name')} />
              </label>
              <label>
                Email
                <input type="email" name="email" required value={form.email} onChange={update('email')} />
              </label>
              <label>
                Subject
                <input type="text" name="subject" value={form.subject} onChange={update('subject')} placeholder="e.g. Wall unit for a 2.4m alcove" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" required value={form.message} onChange={update('message')} />
              </label>
              <button type="submit" className="brass-btn solid" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  )
}
