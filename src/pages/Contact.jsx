import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ fname: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.fname || !form.email || !form.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    setSubmitted(true);
    setForm({ fname: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main>
      <div className="h-[320px] bg-gradient-to-br from-[#0e0e0e] to-dark2 flex flex-col items-center
                      justify-center pt-[68px] text-center relative page-hero-line">
        <span className="font-script text-2xl text-gold block mb-1">Get In Touch</span>
        <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-cream">Contact Us</h1>
      </div>

      <section className="px-[5%] py-16 bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: address + map */}
          <div>
            <div className="flex items-start gap-4 mb-8 p-5 bg-dark2 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <span className="text-3xl">📍</span>
              <div>
                <strong className="font-display text-cream block mb-1">Address</strong>
                <p className="text-sm text-[#7a7672] leading-relaxed">
                  123 Burger Lane, Manhattan<br/>New York City, NY 10001
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[rgba(245,166,35,0.15)] h-[280px]">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175498871633!2d-73.98822608459414!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-dark2 p-8 rounded-xl border border-[rgba(255,255,255,0.05)]">
            <h3 className="font-display text-cream text-xl mb-6">Send Us a Message</h3>

            {submitted && (
              <div className="mb-5 py-3 px-4 rounded-lg bg-[rgba(245,166,35,0.12)] border border-[rgba(245,166,35,0.3)]
                              text-gold text-sm font-bold text-center">
                ✅ Message sent! We'll get back to you shortly.
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
              onClick={handleSubmit}
              className="w-full py-4 bg-gold hover:bg-gold2 text-[#111] font-bold rounded-full
                         text-base tracking-wide cursor-pointer border-none transition-all
                         hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)]"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
