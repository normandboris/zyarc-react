import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const values = [
  {
    icon: 'fa-leaf',
    title: 'Fresh Every Day',
    desc: 'We source produce locally and prep in-house every morning — no shortcuts, no compromises.',
  },
  {
    icon: 'fa-heart',
    title: 'Made with Care',
    desc: 'Every burger, pizza, and fry is crafted by a team that takes pride in what lands on your plate.',
  },
  {
    icon: 'fa-users',
    title: 'Community First',
    desc: 'From neighborhood regulars to first-time visitors, everyone gets the same warm ZyArc welcome.',
  },
];

const milestones = [
  { year: '2018', event: 'ZyArc opens its first location on Burger Lane, Manhattan.' },
  { year: '2020', event: 'Launched online ordering to keep serving the community through tough times.' },
  { year: '2023', event: 'Voted Best Burger in the City by NYC Food & Drink Awards.' },
  { year: '2025', event: 'Expanded the menu and rebuilt our digital experience from the ground up.' },
];

export default function About() {
  return (
    <main>
      <PageHero eyebrow="Our Story" title="About ZyArc" />

      {/* Story */}
      <section className="px-[5%] py-20 bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-3">
              Who We Are
            </span>
            <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-cream tracking-tight mb-5">
              Bold flavors, honest food, NYC energy
            </h2>
            <p className="text-sm text-body leading-relaxed mb-4">
              ZyArc started with a simple idea: fast food shouldn&apos;t mean cutting corners. What began as a
              single grill on Burger Lane has grown into a neighborhood favorite — a place where the burgers
              are stacked high, the fries stay crispy, and every guest leaves satisfied.
            </p>
            <p className="text-sm text-body leading-relaxed mb-4">
              We blend classic American comfort food with a modern twist. Our team works hard behind the
              scenes so your experience out front is effortless — whether you&apos;re dining in, grabbing
              pickup, or ordering from the couch.
            </p>
            <p className="text-sm text-body leading-relaxed">
              At ZyArc, we believe great food brings people together. That&apos;s the mission behind every
              patty we flip and every order we pack.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-goldline shadow-card-hover">
            <img
              src="images/restaurant.png"
              alt="Inside ZyArc restaurant"
              loading="lazy"
              className="w-full h-[340px] object-cover block"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-[5%] py-20 bg-dark2 border-y border-goldline">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-2">
            What Drives Us
          </span>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-cream tracking-tight">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map(v => (
            <div
              key={v.title}
              className="p-6 rounded-xl bg-dark3 border border-subtle text-center"
            >
              <div className="text-gold text-3xl mb-4">
                <i className={`fa ${v.icon}`} aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-cream text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-subtle leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-[5%] py-20 bg-dark">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-2">
            The Journey
          </span>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-cream tracking-tight">
            Milestones
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {milestones.map(m => (
            <div
              key={m.year}
              className="flex gap-6 pb-8 ml-4 pl-8 relative border-l-2 border-[color:var(--gold-border)] last:pb-0"
            >
              <span
                className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold border-2 border-dark"
                aria-hidden="true"
              />
              <div>
                <span className="font-display font-bold text-gold text-lg block mb-1">{m.year}</span>
                <p className="text-sm text-body leading-relaxed">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5%] py-16 bg-dark2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl text-cream mb-3 tracking-tight">
            Ready to taste the difference?
          </h2>
          <p className="text-sm text-subtle mb-8">
            Browse our full menu or stop by — we&apos;d love to serve you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-block bg-gold hover:bg-gold2 text-[#111] font-bold py-3 px-8 rounded-full
                         text-sm transition-all duration-200 hover:-translate-y-0.5 no-underline
                         hover:shadow-gold-btn"
            >
              View Menu
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-medium text-muted hover:text-cream
                         hover:border-gold-strong font-bold py-3 px-8 rounded-full text-sm
                         transition-all duration-200 no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
