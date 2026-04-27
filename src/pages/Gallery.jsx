import { useState, useEffect } from 'react';

const slides = [
  { img: 'images/inside.png',     caption: 'Interior' },
  { img: 'images/inside2.png',    caption: 'Interior' },
  { img: 'images/restaurant.png', caption: 'Our Burgers' },
  { img: 'images/ab.png',         caption: '' },
  { img: 'images/bc.png',         caption: '' },
  { img: 'images/cd.png',         caption: '' },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const goTo = (n) => setCurrent((n + slides.length) % slides.length);
  const move = (dir) => setCurrent(c => (c + dir + slides.length) % slides.length);

  // Auto-advance — functional updater avoids stale closure
  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <div className="h-[320px] bg-gradient-to-br from-[#0e0e0e] to-dark2 flex flex-col items-center
                      justify-center pt-[68px] text-center relative page-hero-line">
        <span className="font-script text-2xl text-gold block mb-1">Visual Feast</span>
        <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-cream">Our Gallery</h1>
      </div>

      <section className="px-[5%] py-16 bg-dark">
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(245,166,35,0.15)] bg-dark2 max-w-5xl mx-auto">
          {/* Track */}
          <div
            className="slider-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="min-w-full h-[460px] max-sm:h-[280px] relative overflow-hidden flex-shrink-0">
                <img src={s.img} alt={s.caption || `Slide ${i + 1}`}
                     className="w-full h-full object-cover object-center block" />
                {s.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
                                  px-8 pb-6 pt-10 font-display text-xl text-cream">
                    {s.caption}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          {['prev','next'].map((dir) => (
            <button
              key={dir}
              onClick={() => move(dir === 'prev' ? -1 : 1)}
              className={`absolute top-1/2 -translate-y-1/2 bg-[rgba(245,166,35,0.85)] hover:bg-gold
                          border-none rounded-full w-11 h-11 text-xl text-[#111] cursor-pointer z-10 font-bold
                          transition-all flex items-center justify-center
                          ${dir === 'prev' ? 'left-4' : 'right-4'}`}
            >
              {dir === 'prev' ? '←' : '→'}
            </button>
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full border-2 border-[rgba(245,166,35,0.6)] cursor-pointer transition-all
                            ${i === current
                              ? 'w-5 h-2.5 bg-gold border-gold'
                              : 'w-2.5 h-2.5 bg-transparent'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
