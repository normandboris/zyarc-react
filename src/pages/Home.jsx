import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const features = [
  { icon: 'fa-rocket', title: 'Fast Delivery', desc: 'Under 30 minutes, guaranteed' },
  { icon: 'fa-leaf', title: 'Fresh Ingredients', desc: 'Locally sourced every morning' },
  { icon: 'fa-trophy', title: 'Award Winning', desc: 'Best Burger in the City' },
];

const featured = [
  {
    name: 'BBQ Bacon Stack',
    price: 15.49,
    image: 'images/BBQbaconStack.png',
    tag: 'Best Seller',
  },
  {
    name: 'Classic ZyArc Burger',
    price: 12.99,
    image: 'images/classic-burger.jpg',
    tag: 'Fan Favorite',
  },
  {
    name: 'Golden Crispy Fries',
    price: 4.99,
    image: 'images/fries.png',
    tag: 'Side Kick',
  },
];

const testimonials = [
  {
    quote: 'The BBQ Bacon Stack is unreal. Best burger I\'ve had in NYC — and the fries are perfect every time.',
    name: 'Marcus T.',
    rating: 5,
  },
  {
    quote: 'Fast delivery, hot food, and portions that actually fill you up. ZyArc is our Friday night go-to.',
    name: 'Sarah L.',
    rating: 5,
  },
  {
    quote: 'Love the vibe inside and the menu online makes ordering a breeze. That lemonade hits different.',
    name: 'James R.',
    rating: 5,
  },
];

export default function Home() {
  const { addToCart, setIsOpen } = useCart();

  const handleQuickAdd = (item) => {
    addToCart(item.name, item.price, item.image);
    setIsOpen(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center px-[5%] pt-[100px] pb-16 relative overflow-hidden
                           bg-gradient-to-br from-[#0e0e0e] via-[#141414] to-[#1a1a1a]">
        <div className="max-w-xl z-[2] animate-fadeIn">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-3">Welcome to ZyArc</span>
          <h1 className="font-display font-extrabold text-[clamp(2.4rem,5.5vw,3.75rem)] text-cream leading-[1.08] tracking-tight mb-5">
            Fast Food<br />Restaurant
          </h1>
          <p className="text-[#9e9993] text-base leading-relaxed mb-8 max-w-md">
            From juicy, flavor-packed burgers to feast pizzas and perfectly golden fries,
            every bite is made to steal the show. Come hungry, leave happy!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="inline-block bg-gold hover:bg-gold2 text-[#111] font-bold py-3 px-8 rounded-full
                         text-sm transition-all duration-200 hover:-translate-y-0.5 no-underline
                         hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)]"
            >
              Order Now
            </Link>
            <Link
              to="/gallery"
              className="inline-block border-2 border-[rgba(245,166,35,0.4)] text-gold hover:bg-[rgba(245,166,35,0.08)]
                         font-bold py-3 px-8 rounded-full text-sm transition-all duration-200 no-underline
                         hover:-translate-y-0.5"
            >
              View Gallery
            </Link>
          </div>
        </div>

        <div
          className="absolute right-0 bottom-0 w-[65%] max-w-[850px] pointer-events-none z-[1]
                     max-md:opacity-40 max-md:-right-[5%] max-sm:hidden"
        >
          <img
            src="images/heroburger.png"
            alt="Delicious ZyArc burger with fresh toppings"
            className="w-full block scale-110"
          />
        </div>
      </section>

      {/* Features */}
      <div
        className="bg-dark2 px-[5%] py-10 grid grid-cols-1 md:grid-cols-3 gap-6
                   border-t border-[rgba(245,166,35,0.1)]"
      >
        {features.map(f => (
          <div
            key={f.title}
            className="flex items-center gap-4 p-4 rounded-lg bg-dark3 border border-[rgba(255,255,255,0.05)]"
          >
            <div className="text-gold text-3xl w-12 flex-shrink-0 text-center">
              <i className={`fa ${f.icon}`} aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-cream text-base mb-0.5">{f.title}</h4>
              <p className="text-xs text-[#7a7672]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured dishes */}
      <section className="px-[5%] py-20 bg-dark">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-2">Customer Favorites</span>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-cream tracking-tight">Popular Picks</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featured.map(item => (
            <article
              key={item.name}
              className="bg-dark2 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)]
                         transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-[200px] object-cover block bg-dark3"
                />
                <span
                  className="absolute top-3 left-3 bg-gold text-[#111] text-[0.65rem] font-black
                             uppercase tracking-wider px-3 py-1 rounded-full"
                >
                  {item.tag}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-display font-semibold text-cream text-lg">{item.name}</h3>
                  <span className="text-gold font-bold">${item.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => handleQuickAdd(item)}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(245,166,35,0.1)] text-gold border border-gold
                             flex items-center justify-center text-xl cursor-pointer
                             hover:bg-gold hover:text-[#111] transition-all hover:scale-110"
                  aria-label={`Add ${item.name} to cart`}
                >
                  +
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/menu"
            className="inline-block text-gold hover:text-gold2 font-bold text-sm uppercase tracking-widest
                       no-underline border-b-2 border-gold pb-0.5 transition-colors"
          >
            See Full Menu →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-[5%] py-20 bg-dark2 border-y border-[rgba(245,166,35,0.08)]">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-2">What People Say</span>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-cream tracking-tight">Loved by Locals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(t => (
            <blockquote
              key={t.name}
              className="bg-dark3 p-6 rounded-xl border border-[rgba(255,255,255,0.05)] flex flex-col gap-4"
            >
              <div className="text-gold text-sm" aria-label={`${t.rating} out of 5 stars`}>
                {'★'.repeat(t.rating)}
              </div>
              <p className="text-sm text-[#9e9993] leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-cream font-sans text-sm font-medium">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5%] py-20 bg-dark">
        <div
          className="max-w-4xl mx-auto text-center rounded-2xl p-10 md:p-14
                     bg-gradient-to-br from-dark2 to-dark3 border border-[rgba(245,166,35,0.2)]
                     relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f5a623 0%, transparent 50%)' }}
          />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-3 relative">Hungry Yet?</span>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-cream mb-4 relative tracking-tight">
            Order pickup or stop by today
          </h2>
          <p className="text-[#7a7672] text-sm mb-8 max-w-md mx-auto relative">
            Open daily from 10am. Find us at 123 Burger Lane, Manhattan — or order online in seconds.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative">
            <Link
              to="/menu"
              className="inline-block bg-gold hover:bg-gold2 text-[#111] font-bold py-3 px-8 rounded-full
                         text-sm transition-all duration-200 hover:-translate-y-0.5 no-underline
                         hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)]"
            >
              Order Online
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-[rgba(255,255,255,0.15)] text-muted hover:text-cream
                         hover:border-[rgba(245,166,35,0.4)] font-bold py-3 px-8 rounded-full text-sm
                         transition-all duration-200 no-underline"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
