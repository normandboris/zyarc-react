import { useState } from 'react';
import { useCart } from '../context/CartContext';

const menuItems = [
  {
    name: 'Classic Smash Burger',
    desc: 'Double smash patty, American cheese, special sauce, brioche bun.',
    price: 12.99,
    img: 'images/burger1.png',
    cat: 'burger',
  },
  {
    name: 'BBQ Feast Pizza',
    desc: 'Smoky BBQ base, pulled chicken, red onion, jalapeños, mozzarella.',
    price: 14.99,
    img: 'images/bbq-pizza.png',
    cat: 'pizza',
  },
  {
    name: 'BBQ Bacon Stack',
    desc: 'Crispy bacon, caramelized onions, BBQ glaze, cheddar, pickle.',
    price: 14.49,
    img: 'images/BBQbaconStack.png',
    cat: 'burger',
  },
  {
    name: 'Golden Crispy Fries',
    desc: 'Freshly cut potatoes, fried to a golden crisp and perfectly salted.',
    price: 4.99,
    img: 'images/fries.png',
    cat: 'sides',
  },
];

const tabs = [
  { key: 'all', label: 'All Items' },
  { key: 'burger', label: 'Burgers' },
  { key: 'pizza', label: 'Pizza' },
  { key: 'sides', label: 'Sides' },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  const [added, setAdded] = useState({});
  const { addToCart } = useCart();

  const filtered = menuItems.filter(i => activeTab === 'all' || i.cat === activeTab);

  const handleAdd = (item) => {
    addToCart(item.name, item.price, item.img);
    setAdded(p => ({ ...p, [item.name]: true }));
    setTimeout(() => setAdded(p => ({ ...p, [item.name]: false })), 900);
  };

  return (
    <main>
      {/* Page hero */}
      <div className="h-[320px] bg-gradient-to-br from-[#0e0e0e] to-dark2 flex flex-col items-center
                      justify-center pt-[68px] text-center relative page-hero-line">
        <span className="font-script text-2xl text-gold block mb-1">Explore Our</span>
        <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-cream">Full Menu</h1>
      </div>

      <section className="px-[5%] py-16 bg-dark">
        {/* Tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-12">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-6 py-2 rounded-full border-2 text-sm font-bold cursor-pointer transition-all duration-200
                ${activeTab === t.key
                  ? 'bg-gold text-[#111] border-gold'
                  : 'bg-transparent text-muted border-[rgba(245,166,35,0.3)] hover:bg-gold hover:text-[#111] hover:border-gold'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div key={item.name}
                 className="bg-dark2 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)]
                            transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]
                            animate-fadeIn">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[190px] object-cover object-center block bg-dark3"
              />
              <div className="p-5">
                <h3 className="font-display text-cream text-lg mb-1">{item.name}</h3>
                <p className="text-xs text-[#7a7672] mb-4 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gold">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => handleAdd(item)}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center text-xl font-light
                                transition-all duration-300 cursor-pointer
                                ${added[item.name]
                                  ? 'bg-gold text-[#111] border-gold scale-110'
                                  : 'bg-[rgba(245,166,35,0.1)] text-gold border-gold hover:bg-gold hover:text-[#111] hover:scale-110'}`}
                    title={`Add ${item.name} to cart`}
                  >
                    {added[item.name] ? '✓' : '+'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
