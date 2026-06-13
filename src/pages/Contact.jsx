import { useState } from 'react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [form, setForm] = useState({ fname: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fname.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
    setForm({ fname: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main>
      <PageHero eyebrow="Get In Touch" title="Contact Us" />

      <section className="px-[5%] py-16 bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="flex items-start gap-4 mb-6 p-5 bg-dark2 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <span className="text-3xl" aria-hidden="true">📍</span>
              <div>
                <strong className="font-display text-cream block mb-1">Address</strong>
                <p className="text-sm text-[#7a7672] leading-relaxed">
                  123 Burger Lane, Manhattan<br />New York City, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6 p-5 bg-dark2 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <span className="text-3xl" aria-hidden="true">📞</span>
              <div>
                <strong className="font-display text-cream block mb-1">Phone</strong>
                <a href="tel:+12125550123" className="text-sm text-gold hover:text-gold2 no-underline transition-colors">
                  (212) 555-0123
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8 p-5 bg-dark2 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <span className="text-3xl" aria-hidden="true">🕐</span>
              <div>
                <strong className="font-display text-cream block mb-1">Hours</strong>
                <p className="text-sm text-[#7a7672] leading-relaxed">
                  Mon – Thu: 10am – 10pm<br />
                  Fri – Sat: 10am – 12am<br />
                  Sun: 11am – 9pm
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[rgba(245,166,35,0.15)] h-[280px]">
              <iframe
                title="ZyArc location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175498871633!2d-73.98822608459414!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-dark2 p-8 rounded-xl border border-[rgba(255,255,255,0.05)]"
            noValidate
          >
            <h3 className="font-display text-cream text-xl mb-6">Send Us a Message</h3>

            {submitted && (
              <div
                role="status"
                className="mb-5 py-3 px-4 rounded-lg bg-[rgba(245,166,35,0.12)] border border-[rgba(245,166,35,0.3)]
                            text-gold text-sm font-bold text-center"
              >
                Message sent! We&apos;ll get back to you shortly.
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="mb-5 py-3 px-4 rounded-lg bg-[rgba(224,82,82,0.1)] border border-[rgba(224,82,82,0.3)]
                            text-[#f08080] text-sm font-bold text-center"
              >
                {error}
              </div>
            )}

            {[
              { id: 'fname', label: 'First Name', type: 'text', placeholder: 'John' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
            ].map(f => (
              <div key={f.id} className="mb-5">
                <label htmlFor={f.id} className="block text-xs font-bold uppercase tracking-widest text-[#7a7672] mb-2">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                  className="w-full bg-dark3 border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3
                             text-cream text-sm placeholder-[#4a4744] outline-none
                             focus:border-[rgba(245,166,35,0.5)] focus:bg-[rgba(245,166,35,0.04)] transition-all"
                />
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#7a7672] mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here…"
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                className="w-full bg-dark3 border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3
                           text-cream text-sm placeholder-[#4a4744] outline-none resize-none
                           focus:border-[rgba(245,166,35,0.5)] focus:bg-[rgba(245,166,35,0.04)] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold hover:bg-gold2 text-[#111] font-bold rounded-full
                         text-base tracking-wide cursor-pointer border-none transition-all
                         hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
