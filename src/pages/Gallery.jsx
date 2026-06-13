import { useState, useEffect, useRef, useCallback } from 'react';
import PageHero from '../components/PageHero';

const slides = [
  { img: 'images/inside.png', caption: 'Interior' },
  { img: 'images/inside2.png', caption: 'Interior' },
  { img: 'images/restaurant.png', caption: 'Our Burgers' },
  { img: 'images/ab.png', caption: 'Fresh off the grill' },
  { img: 'images/bc.png', caption: 'Made to order' },
  { img: 'images/cd.png', caption: 'The ZyArc experience' },
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
          className="relative overflow-hidden rounded-2xl border border-[rgba(245,166,35,0.15)] bg-dark2 max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((s, i) => (
              <div key={i} className="min-w-full h-[460px] max-sm:h-[280px] relative overflow-hidden flex-shrink-0">
                <img
                  src={s.img}
                  alt={s.caption || `Gallery photo ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center block"
                />
                {s.caption && (
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
                                px-8 pb-6 pt-10 font-display text-xl text-cream"
                  >
                    {s.caption}
                  </div>
                )}
              </div>
            ))}
          </div>

          {['prev', 'next'].map(dir => (
            <button
              key={dir}
              onClick={() => move(dir === 'prev' ? -1 : 1)}
              aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
              className={`absolute top-1/2 -translate-y-1/2 bg-[rgba(245,166,35,0.85)] hover:bg-gold
                          border-none rounded-full w-11 h-11 text-xl text-[#111] cursor-pointer z-10 font-bold
                          transition-all flex items-center justify-center
                          ${dir === 'prev' ? 'left-4' : 'right-4'}`}
            >
              {dir === 'prev' ? '←' : '→'}
            </button>
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                className={`rounded-full border-2 border-[rgba(245,166,35,0.6)] cursor-pointer transition-all
                            ${i === current ? 'w-5 h-2.5 bg-gold border-gold' : 'w-2.5 h-2.5 bg-transparent'}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-5xl mx-auto mt-6">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`View ${s.caption || `photo ${i + 1}`}`}
              className={`rounded-lg overflow-hidden border-2 transition-all aspect-[4/3]
                          ${i === current
                            ? 'border-gold scale-[1.02] shadow-[0_4px_16px_rgba(245,166,35,0.25)]'
                            : 'border-transparent opacity-70 hover:opacity-100 hover:border-[rgba(245,166,35,0.4)]'}`}
            >
              <img src={s.img} alt="" className="w-full h-full object-cover block" loading="lazy" />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
