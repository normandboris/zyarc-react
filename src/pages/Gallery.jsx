import { useState, useEffect, useRef, useCallback } from 'react';
import PageHero from '../components/PageHero';

const slides = [
  { img: 'images/inside.png', caption: 'Cozy dining room' },
  { img: 'images/inside2.png', caption: 'Warm interior vibes' },
  { img: 'images/restaurant.png', caption: 'The ZyArc kitchen' },
  { img: 'images/heroburger.png', caption: 'Signature hero burger' },
  { img: 'images/classic-burger.jpg', caption: 'Classic ZyArc Burger' },
  { img: 'images/BBQbaconStack.png', caption: 'BBQ Bacon Stack' },
  { img: 'images/bbq-pizza.png', caption: 'BBQ Feast Pizza' },
  { img: 'images/fries.png', caption: 'Golden crispy fries' },
  { img: 'images/ab.png', caption: 'Fresh off the grill' },
  { img: 'images/bc.png', caption: 'Made to order' },
  { img: 'images/cd.png', caption: 'Plated to perfection' },
  { img: 'images/3.jpg', caption: 'Ice-cold refreshments' },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback((n) => setCurrent((n + slides.length) % slides.length), []);
  const move = (dir) => goTo(current + dir);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => goTo(current + 1), 4000);
    return () => clearInterval(intervalRef.current);
  }, [current, paused, goTo]);

  return (
    <main>
      <PageHero eyebrow="Visual Feast" title="Our Gallery" />

      <section className="px-[5%] py-16 bg-dark">
        <div
          className="relative overflow-hidden rounded-2xl border border-goldline bg-dark2 max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((s, i) => (
              <div key={s.img} className="min-w-full h-[460px] max-sm:h-[280px] relative overflow-hidden flex-shrink-0">
                <img
                  src={s.img}
                  alt={s.caption}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center block"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
                              px-8 pb-6 pt-10 font-display text-xl text-cream"
                >
                  {s.caption}
                </div>
              </div>
            ))}
          </div>

          {['prev', 'next'].map(dir => (
            <button
              key={dir}
              onClick={() => move(dir === 'prev' ? -1 : 1)}
              aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
              className={`absolute top-1/2 -translate-y-1/2 bg-gold/85 hover:bg-gold
                          border-none rounded-full w-11 h-11 text-xl text-[#111] cursor-pointer z-10 font-bold
                          transition-all flex items-center justify-center
                          ${dir === 'prev' ? 'left-4' : 'right-4'}`}
            >
              {dir === 'prev' ? '←' : '→'}
            </button>
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--hero-overlay)] px-4 py-1.5 rounded-full
                          text-xs font-semibold text-cream tracking-wider">
            {current + 1} / {slides.length}
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-5xl mx-auto mt-6">
          {slides.map((s, i) => (
            <button
              key={s.img}
              onClick={() => goTo(i)}
              aria-label={`View ${s.caption}`}
              aria-current={i === current ? 'true' : undefined}
              className={`rounded-lg overflow-hidden border-2 transition-all aspect-[4/3]
                          ${i === current
                            ? 'border-gold scale-[1.02] shadow-gold-btn'
                            : 'border-transparent opacity-70 hover:opacity-100 hover:border-gold-strong'}`}
            >
              <img src={s.img} alt="" className="w-full h-full object-cover block" loading="lazy" />
            </button>
          ))}
        </div>

        {/* Full grid */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="text-center mb-8">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-2">
              Full Collection
            </span>
            <h2 className="font-display font-bold text-[clamp(1.4rem,2.5vw,2rem)] text-cream tracking-tight">
              Every Angle of ZyArc
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {slides.map((s, i) => (
              <button
                key={`grid-${s.img}`}
                onClick={() => {
                  goTo(i);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative rounded-xl overflow-hidden border border-light
                           aspect-[4/3] cursor-pointer text-left"
              >
                <img
                  src={s.img}
                  alt={s.caption}
                  loading="lazy"
                  className="w-full h-full object-cover block transition-transform duration-300
                             group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             flex items-end p-4"
                >
                  <span className="font-display text-sm text-cream font-semibold">{s.caption}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
