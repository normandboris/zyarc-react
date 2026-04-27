import { Link } from 'react-router-dom';

const features = [
  { icon: 'fa-rocket',  title: 'Fast Delivery',     desc: 'Under 30 minutes, guaranteed' },
  { icon: 'fa-leaf',    title: 'Fresh Ingredients',  desc: 'Locally sourced every morning' },
  { icon: 'fa-trophy',  title: 'Award Winning',      desc: 'Best Burger in the City' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center px-[5%] pt-[100px] pb-16 relative overflow-hidden
                           bg-gradient-to-br from-[#0e0e0e] via-[#141414] to-[#1a1a1a]">
        <div className="max-w-xl z-[2] animate-fadeIn">
          <span className="font-script text-2xl text-gold block mb-1">Welcome to ZyArc</span>
          <h1 className="font-script text-[clamp(2.6rem,6vw,4.2rem)] text-cream leading-tight mb-5">
            Fast Food<br/>Restaurant
          </h1>
          <p className="text-[#9e9993] text-base leading-relaxed mb-8 max-w-md">
            Welcome to ZyArc! From juicy, flavor-packed burgers to feast pizzas and perfectly golden fries,
            every bite is made to steal the show. Come hungry, leave happy!
          </p>
          <Link to="/menu"
                className="inline-block bg-gold hover:bg-gold2 text-[#111] font-bold py-3 px-8 rounded-full
                           text-sm transition-all duration-200 hover:-translate-y-0.5 no-underline
                           hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)]">
            Order Now
          </Link>
        </div>

        {/* Hero image */}
        <div className="absolute right-0 bottom-0 w-[65%] max-w-[850px] pointer-events-none z-[1]
                        max-md:opacity-40 max-md:-right-[5%] max-sm:hidden">
          <img src="images/heroburger.png" alt="Delicious Burger" className="w-full block scale-110" />
        </div>
      </section>

      {/* Features */}
      <div className="bg-dark2 px-[5%] py-10 grid grid-cols-1 md:grid-cols-3 gap-6
                      border-t border-[rgba(245,166,35,0.1)]">
        {features.map(f => (
          <div key={f.title}
               className="flex items-center gap-4 p-4 rounded-lg bg-dark3 border border-[rgba(255,255,255,0.05)]">
            <div className="text-gold text-3xl w-12 flex-shrink-0 text-center">
              <i className={`fa ${f.icon}`} />
            </div>
            <div>
              <h4 className="font-display text-cream text-base mb-0.5">{f.title}</h4>
              <p className="text-xs text-[#7a7672]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
