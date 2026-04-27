import { Link } from 'react-router-dom';

const stats = [
  { value: '10+', label: 'Years Serving' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '15+', label: 'Menu Items' },
];

const values = [
  { icon: '🌿', title: 'Fresh Every Day',    desc: 'Every ingredient is locally sourced and delivered fresh each morning. No frozen shortcuts — ever.' },
  { icon: '🔥', title: 'Made to Order',       desc: 'Every burger is smashed and every pizza topped the moment you order. Hot, fresh, and yours alone.' },
  { icon: '❤️', title: 'Crafted with Love',   desc: 'Our team puts passion into every plate. We take pride in the food we make and the people we feed.' },
];

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <div className="h-[320px] bg-gradient-to-br from-[#0e0e0e] to-dark2 flex flex-col items-center
                      justify-center pt-[68px] text-center relative page-hero-line">
        <span className="font-script text-2xl text-gold block mb-1">Who We Are</span>
        <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-cream">About ZyArc</h1>
      </div>

      {/* Story Section */}
      <section className="px-[5%] py-20 bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Image side */}
          <div className="relative">
            <img
              src="images/restaurant.png"
              alt="ZyArc Restaurant"
              className="w-full h-[400px] object-cover rounded-2xl border border-[rgba(245,166,35,0.15)]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-[#111] rounded-2xl px-6 py-4 text-center
                            shadow-[0_8px_32px_rgba(245,166,35,0.35)] hidden sm:block">
              <div className="font-script text-4xl font-bold">10+</div>
              <div className="text-xs font-bold uppercase tracking-widest">Years of flavor</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="font-script text-2xl text-gold block mb-2">Our Story</span>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-cream mb-6 leading-tight">
              Born from a love of<br />bold, honest food
            </h2>
            <p className="text-[#9e9993] leading-relaxed mb-5">
              ZyArc started in a small kitchen in Manhattan with one simple belief — fast food doesn't have to
              mean cheap food. Our founder wanted to create a place where speed and quality could coexist,
              where every smash burger had a perfectly seared crust and every pizza came out of the oven
              bubbling and golden.
            </p>
            <p className="text-[#9e9993] leading-relaxed mb-8">
              Today, we serve thousands of hungry New Yorkers every week, but the spirit hasn't changed.
              We still source our produce locally, grind our own beef, and hand-stretch every pizza dough.
              Because great food is always worth the extra effort.
            </p>
            <Link
              to="/menu"
              className="inline-block bg-gold hover:bg-gold2 text-[#111] font-bold py-3 px-8 rounded-full
                         text-sm transition-all duration-200 hover:-translate-y-0.5 no-underline
                         hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)]"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-dark2 border-y border-[rgba(245,166,35,0.1)] px-[5%] py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="font-script text-4xl text-gold mb-1">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-[#7a7672] font-bold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <section className="px-[5%] py-20 bg-dark">
        <div className="text-center mb-12">
          <span className="font-script text-2xl text-gold block mb-1">What Drives Us</span>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-cream">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map(v => (
            <div key={v.title}
                 className="bg-dark2 border border-[rgba(255,255,255,0.05)] rounded-2xl p-8
                            hover:border-[rgba(245,166,35,0.2)] hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-5">{v.icon}</div>
              <h3 className="font-display text-cream text-lg mb-3">{v.title}</h3>
              <p className="text-sm text-[#7a7672] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5%] py-16 bg-dark2 border-t border-[rgba(245,166,35,0.1)] text-center">
        <span className="font-script text-2xl text-gold block mb-2">Ready to eat?</span>
        <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] text-cream mb-6">Come visit us or order online</h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/menu"
                className="inline-block bg-gold hover:bg-gold2 text-[#111] font-bold py-3 px-8 rounded-full
                           text-sm transition-all hover:-translate-y-0.5 no-underline
                           hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)]">
            Order Now
          </Link>
          <Link to="/contact"
                className="inline-block bg-transparent border-2 border-gold text-gold font-bold py-3 px-8
                           rounded-full text-sm transition-all hover:bg-gold hover:text-[#111] no-underline">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
